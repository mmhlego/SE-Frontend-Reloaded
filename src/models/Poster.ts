export interface Poster {
	id: string;
	type: PosterTypes;
	title: string;
	imageUrl: string;
	targetUrl: string;
}

export enum PosterTypes {
	LargePoster = 1,
	SmallPoster = 2,
	Advertisement = 3
}
