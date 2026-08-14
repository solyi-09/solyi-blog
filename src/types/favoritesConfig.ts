export type FavoriteFolderConfig = {
	/** Bilibili public favorites folder ID (the `fid` query parameter). */
	mediaId: string;
	title?: string;
};

export type FavoritesPageConfig = {
	title?: string;
	description?: string;
	folders: FavoriteFolderConfig[];
};
