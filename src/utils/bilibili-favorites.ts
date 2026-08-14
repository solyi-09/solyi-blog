import type { FavoriteFolderConfig } from "@/types/favoritesConfig";

type BilibiliFavoriteResponse = {
	code: number;
	message: string;
	data?: {
		info?: {
			title?: string;
			media_count?: number;
		};
		medias?: BilibiliFavoriteMedia[];
	};
};

type BilibiliFavoriteMedia = {
	title?: string;
	cover?: string;
	duration?: number;
	bvid?: string;
	upper?: {
		name?: string;
	};
	cnt_info?: {
		play?: number;
		view_text_1?: string;
	};
};

export type FavoriteVideo = {
	title: string;
	cover: string;
	duration: string;
	url: string;
	upperName: string;
	playCount: string;
};

export type FavoritesData = {
	title: string;
	mediaCount: number;
	videos: FavoriteVideo[];
	error?: string;
};

function formatDuration(totalSeconds = 0): string {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function toSecureUrl(value = ""): string {
	return value.replace(/^http:/, "https:");
}

export async function getBilibiliFavorites(
	config: FavoriteFolderConfig,
): Promise<FavoritesData> {
	const fallback = {
		title: config.title || "视频收藏",
		mediaCount: 0,
		videos: [],
	};

	try {
		const endpoint = new URL("https://api.bilibili.com/x/v3/fav/resource/list");
		endpoint.search = new URLSearchParams({
			media_id: config.mediaId,
			pn: "1",
			ps: "20",
			keyword: "",
			order: "mtime",
			type: "0",
			tid: "0",
			platform: "web",
		}).toString();

		const response = await fetch(endpoint, {
			headers: { "User-Agent": "Mozilla/5.0" },
			signal: AbortSignal.timeout(10_000),
		});
		if (!response.ok) {
			throw new Error(`Bilibili responded with ${response.status}`);
		}

		const payload = (await response.json()) as BilibiliFavoriteResponse;
		if (payload.code !== 0 || !payload.data) {
			throw new Error(payload.message || "Bilibili returned no data");
		}

		const videos = (payload.data.medias || []).flatMap((media) => {
			if (!media.bvid || !media.title || !media.cover) return [];
			return [
				{
					title: media.title,
					cover: toSecureUrl(media.cover),
					duration: formatDuration(media.duration),
					url: `https://www.bilibili.com/video/${media.bvid}/`,
					upperName: media.upper?.name || "未知 UP 主",
					playCount:
						media.cnt_info?.view_text_1 ||
						media.cnt_info?.play?.toLocaleString("zh-CN") ||
						"-",
				},
			];
		});

		return {
			title: payload.data.info?.title || fallback.title,
			mediaCount: payload.data.info?.media_count || videos.length,
			videos,
		};
	} catch (error) {
		console.warn("[Favorites] Failed to fetch Bilibili favorites:", error);
		return { ...fallback, error: "暂时无法获取收藏夹内容，请稍后再试。" };
	}
}
