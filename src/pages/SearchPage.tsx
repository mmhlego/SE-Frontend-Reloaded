import { useQuery } from "@tanstack/react-query";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GetSellers } from "../apis/Users/SellerApis";
import Loading from "../components/Loading";
import { GetProducts } from "../apis/Products/ProductApis";
import SellerRowItem from "../components/SellerRowItem";
import ProductRowItem from "../components/ProductRowItem";

export default function SearchPage() {
	const navigate = useNavigate();
	const [searchParams, _] = useSearchParams();
	const searchText = searchParams.get("value");

	const { isLoading: sellersLoading, data: sellers } = useQuery([`sellers-${searchText}`], () =>
		GetSellers(1, 3, searchText?.toString())
	);

	const { isLoading: productsLoading, data: products } = useQuery(
		[`products-${searchText}`],
		() => GetProducts(1, 5, searchText?.toString())
	);

	return (
		<div className="flex flex-col p-8 gap-4">
			{sellersLoading ? (
				<Loading />
			) : sellers?.data.length === 0 ? (
				<p className="p-5 text-center text-xl font-medium">فروشنده ای یافت نشد</p>
			) : (
				sellers?.data.map((seller) => (
					<SellerRowItem key={seller.address} seller={seller} />
				))
			)}

			<div
				className="border border-gray-300 rounded-lg p-4 flex items-center justify-center gap-3 duration-300 hover:bg-blue/10 hover:gap-5 cursor-pointer"
				dir="rtl"
				onClick={() => navigate(`/sellers?search=${searchText}`)}>
				مشاهده همه فروشندگان
				<AiOutlineArrowLeft />
			</div>

			<hr />

			{productsLoading ? (
				<Loading />
			) : products?.length === 0 ? (
				<p className="p-5 text-center text-xl font-medium">کالایی یافت نشد</p>
			) : (
				products?.map((product) => <ProductRowItem key={product.rowId} product={product} />)
			)}
			<div
				className="border border-gray-300 rounded-lg p-4 flex items-center justify-center gap-3 duration-300 hover:bg-blue/10 hover:gap-5 cursor-pointer"
				dir="rtl"
				onClick={() => navigate(`/products?search=${searchText}`)}>
				مشاهده همه محصولات
				<AiOutlineArrowLeft />
			</div>
		</div>
	);
}
