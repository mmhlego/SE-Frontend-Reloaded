import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GetSellers } from "../apis/Users/SellerApis";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import SellerRowItem from "../components/SellerRowItem";

export default function SellersPage() {
	const [searchParams, _] = useSearchParams();

	const x = searchParams.get("search")?.toString();
	const [search, setSearch] = useState<string>(x ? x : "");

	const {
		isLoading: sellersLoading,
		data: sellers,
		refetch
	} = useQuery([`sellers`], () => GetSellers(1, 1000, search.length > 0 ? search : undefined), {
		cacheTime: 0
	});

	return (
		<div className="flex flex-col p-8 gap-4">
			<form className=" w-full flex items-center justify-center gap-3">
				<Button
					text="جستجو کن"
					onClick={() => {
						refetch();
					}}
				/>
				<InputField value={search} onChange={setSearch} className="w-2/3" rtl />
			</form>

			{sellersLoading ? (
				<Loading />
			) : sellers?.data.length === 0 ? (
				<p className="p-10 text-center text-xl font-medium">فروشنده ای یافت نشد</p>
			) : (
				sellers?.data.map((seller) => (
					<SellerRowItem key={seller.username} seller={seller} />
				))
			)}
		</div>
	);
}
