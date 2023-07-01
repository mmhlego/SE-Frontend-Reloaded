import axios from "axios";
import { StatusResponse } from "../../models/StatusResponses";
import { Poster, PosterTypes } from "../../models/Poster";

export async function GetPosters(posterType?: PosterTypes): Promise<Poster[]> {
	const response = await axios.get("/General/Poster/posters", {
		params: {
			posterType
		}
	});
	return response.data;
}

export async function PostPosters(
	type: PosterTypes,
	title: string,
	imageUrl: string,
	targetUrl: string
): Promise<StatusResponse> {
	const response = await axios.post("/General/Poster/posters", {
		type,
		title,
		imageUrl,
		targetUrl
	});
	return response.data;
}

export async function PutPoster(
	posterId: string,
	type: PosterTypes,
	title: string,
	imageUrl: string,
	targetUrl: string
): Promise<StatusResponse> {
	const response = await axios.put(`/General/Poster/posters/${posterId}`, {
		type,
		title,
		imageUrl,
		targetUrl
	});
	return response.data;
}

export async function DeletePoster(posterId: string): Promise<StatusResponse> {
	const response = await axios.put(`/General/Poster/posters/${posterId}`);
	return response.data;
}
