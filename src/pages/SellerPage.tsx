import { Navigate, useParams } from "react-router";
import { GetSeller } from "../apis/Users/SellerApis";
import { useQuery } from "@tanstack/react-query";
import { GetSales } from "../apis/SaleApis";
import SaleRowItem from "../components/SaleRowItem";

export default function SellerPage() {
	const { sellerId } = useParams();

	if (sellerId === undefined) {
		return <Navigate to={"/sellers"} />;
	}

	const { data: seller } = useQuery([sellerId], () => GetSeller(sellerId));

	const { data: sales } = useQuery([`sales-${sellerId}`], () => GetSales(sellerId));

	return (
		<div className="flex flex-col items-center gap-3 p-5" dir="rtl">
			<img className="w-32 h-32 rounded-full aspect-square" src={seller?.avatar} />
			<p className="text-xl font-medium">نام کاربری: {seller?.username}</p>
			<p className="text-lg">آدرس: {seller?.address}</p>
			<p className="text-lg">ایمیل: {seller?.email}</p>
			<p className="text-lg">شماره تلفن: {seller?.phoneNumber}</p>
			<hr className="w-full" />
			<p className="w-full text-right font-medium">فروش های این فروشنده:</p>
			{sales?.map((sale) => (
				<SaleRowItem key={sale.id} sale={sale} />
			))}
		</div>
	);
}
