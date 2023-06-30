import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { GetSellers } from "../apis/Users/SellerApis";
import Loading from "../components/Loading";

export default function SearchPage() {
	const [searchParams, _] = useSearchParams();
	const searchText = searchParams.get("value");

	const { isLoading: sellersLoading, data: sellers } = useQuery([`sellers-${searchText}`], () =>
		GetSellers(1, 5, searchText?.toString())
	);

	// const { isLoading: productsLoading, data: products } = useQuery(
	// 	[`products-${searchText}`],
	// 	() => GetProducts()
	// );

	return (
		<div className="flex flex-col p-8 gap-4">
			<div>
				{sellersLoading ? (
					<Loading />
				) : (
					sellers?.data.map((seller) => (
						<>
							<p>{seller.address}</p>
						</>
					))
				)}
			</div>
		</div>
	);
}
