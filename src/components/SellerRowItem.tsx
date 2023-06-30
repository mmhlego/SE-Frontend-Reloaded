import { useNavigate } from "react-router";
import { Seller } from "../models/Seller";

type Props = {
	seller: Seller;
};

export default function SellerRowItem({ seller }: Props) {
	const navigate = useNavigate();

	return (
		<div
			className="grid grid-cols-[70%_auto] items-center justify-center border border-gray-300 rounded-lg p-4 gap-3 duration-300 hover:bg-blue/10 cursor-pointer"
			dir="rtl"
			onClick={() => navigate(`/sellers/${seller.username}`)}>
			<div className="h-full flex flex-col justify-evenly">
				<p className="text-lg font-medium">{seller.firstName + " " + seller.lastName}</p>
				<p>{seller.address}</p>
				<a className="text-blue font-medium">اطلاعات بیشتر</a>
			</div>
			<img className="rounded-full" src={seller.avatar} />
		</div>
	);
}
