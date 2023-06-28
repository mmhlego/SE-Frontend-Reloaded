import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { GetSellers } from "../apis/Users/SellerApis";
import Loading from "../components/Loading";

export default function SearchPage() {
	const [searchParams, _] = useSearchParams();

	const { isLoading: sellersLoading, data: sellers } = useQuery(
		[`sellers-${searchParams.get("value")}`],
		() => GetSellers(1, 5)
	);

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
