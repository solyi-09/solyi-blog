import type { FavoritesPageConfig } from "@/types/favoritesConfig";

export const favoritesPageConfig: FavoritesPageConfig = {
	title: "视频收藏",
	description: "一些存在于B站中的个人收藏视频。",
	folders: [
		{
			title: "莎头视频",
			mediaId: "3882695373",
		},
		// 新增收藏夹：{ title: "分类名称", mediaId: "收藏夹 fid" },
	],
};
