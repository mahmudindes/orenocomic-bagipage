import type { PageLoad } from './$types';
import type { BCComic } from '$lib/api';
import { getComics } from '$lib/helper';

export const load: PageLoad = async ({ fetch }) => {
	const limitComics = 20;
	const otherComics: Record<string, string | null> = {};
	const comics = function (page: number): Promise<BCComic[]> {
		return getComics(fetch, page, limitComics, [{ name: 'created_at', sort: 'desc' }], otherComics);
	};

	return {
		comics,
		limitComics,
		otherComics
	};
};
