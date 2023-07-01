import { useQuery } from "@tanstack/react-query";
import { Sale } from "../models/Sale";
import { GetProduct } from "../apis/Products/ProductApis";
import Button from "./Button";
import { useNavigate } from "react-router";

type Props = {
	sale: Sale;
};

export default function SaleRowItem({ sale }: Props) {
	const navigate = useNavigate();

	const { data: product } = useQuery([sale.productId], () => GetProduct(sale.productId));

	return (
		<div className="w-full border border-gray-300 rounded-xl p-5 grid grid-cols-3 gap-3 items-center">
			<p className="col-span-3 text-center font-semibold">{product?.name}</p>
			<p className="">
				<span className="font-bold">قیمت: </span>
				{sale.price} تومان
			</p>
			<p className="">
				<span className="font-bold">موجودی: </span>
				{sale.amount} عدد
			</p>
			<Button
				text="مشاهده کالا"
				className="py-1"
				onClick={() => navigate(`/products/${product?.productId}`)}
			/>
		</div>
	);
}
