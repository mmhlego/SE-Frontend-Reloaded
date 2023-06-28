import { useNavigate } from "react-router";
import Button from "../components/Button";
import { FaHouse } from "react-icons/fa6";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div className="grid place-items-center gap-2 py-36">
			<p className="text-3xl font-medium" dir="rtl">
				404 | یافت نشد
			</p>
			<p className="text-lg">صفحه موردنظر یافت نشد</p>

			<Button accent="cyan" onClick={() => navigate("/")}>
				بازگشت به خانه
				<FaHouse />
			</Button>
		</div>
	);
}
