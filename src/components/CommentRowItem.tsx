import { ProductComment } from "../models/Comment";

type Props = {
	comment: ProductComment;
};

export default function CommentRowItem({ comment }: Props) {
	return <div>{comment.content}</div>;
}
