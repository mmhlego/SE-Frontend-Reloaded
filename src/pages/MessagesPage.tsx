import { useMutation, useQuery } from "@tanstack/react-query";
import { GetMessages, MarkMessageAsRead } from "../apis/EventApis";
import Button from "../components/Button";
import { twMerge } from "tailwind-merge";

export default function MessagesPage() {
	const { data, refetch } = useQuery(["messages"], () => GetMessages(1000), {
		cacheTime: 0
	});

	const { mutate } = useMutation((id: string) => MarkMessageAsRead(id), {
		onSuccess(res) {
			console.log(res);
			refetch();
		}
	});

	return (
		<div className="flex flex-col gap-3 p-5">
			{data?.map((message) => (
				<div
					className={twMerge(
						"flex items-center border border-gray-300 rounded-lg p-3",
						message.isRead ? "bg-gray-200" : ""
					)}
					dir="rtl"
					key={message.id}>
					<p className="flex gap-3">{message.content}</p>

					{message.isRead ? (
						<Button
							accent="green"
							disabled
							text="خوانده شده"
							className="py-1 px-3 mr-auto"
						/>
					) : (
						<Button
							accent="cyan"
							text="خوانده نشده"
							className="py-1 px-3 mr-auto"
							onClick={() => {
								console.log(message.id);
								mutate(message.id);
							}}
						/>
					)}
				</div>
			))}
		</div>
	);
}
