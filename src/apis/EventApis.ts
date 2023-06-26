import axios from "axios";
import { StatusResponse } from "../models/statusResponses";
import { Message } from "../models/Message";

export async function GetMessages(
	startDate?: Date,
	count?: number,
	isRead?: boolean
): Promise<Message[]> {
	const response = await axios.get("/Events/messages", {
		params: {
			startDate,
			count,
			isRead
		}
	});
	return response.data;
}

export async function MarkMessageAsRead(id: string): Promise<StatusResponse> {
	const response = await axios.post(`/Events/messages/${id}`);
	return response.data;
}
