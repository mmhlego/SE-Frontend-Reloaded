import axios from "axios";
import { StatusResponse } from "../models/StatusResponses";
import { Message } from "../models/Message";

export async function GetMessages(
	count?: number,
	startDate?: Date,
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
	const response = await axios.put(`/Events/messages/${id}`);
	return response.data;
}
