import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GetProductImages, GetProducts } from "../apis/Products/ProductApis";
import InputField from "../components/InputField";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import { GetAllSubcategories } from "../apis/Products/CategoryApis";
import { Product } from "../models/Product";
import { GetSales } from "../apis/SaleApis";
import { ProductStateToString } from "../utils/LangUtils";
import Loading from "../components/Loading";

export default function ProductsPage() {
	const [searchParams, _] = useSearchParams();

	const [search, setSearch] = useState<string>("");
	const [subId, setSubId] = useState<string>("");
	const [subTitle, setSubTitle] = useState<string>("");
	const [priceFrom, setPriceFrom] = useState<number>(0);
	const [priceTo, setPriceTo] = useState<number>(10000000);

	const {
		isLoading,
		data: products,
		refetch
	} = useQuery([`products-${search}-${subId}-${priceFrom}-${priceTo}`], () =>
		GetProducts(1, 1000, undefined, undefined, undefined, subId.length > 0 ? subId : undefined)
	);

	useEffect(() => {
		const paramSearch = searchParams.get("search");
		const paramSub = searchParams.get("subcategoryId");

		if (paramSearch !== null) setSearch(paramSearch);
		if (paramSub !== null) setSubId(paramSub);

		const x = allSubs?.find((s) => s.id === subId)?.title;

		if (x) {
			setSubTitle(x);
		} else {
			setSubTitle("");
		}
	}),
		[subId, searchParams];

	const { data: allSubs } = useQuery(["subcategories"], () => GetAllSubcategories());

	return (
		<div className="grid grid-cols-[75%_auto] p-5 gap-3">
			<div className="grid grid-cols-3 grid-flow-row" dir="rtl">
				{isLoading && <Loading className="col-span-3 place-self-center" />}
				{products?.map((product) => (
					<ProductView key={product.rowId} product={product} />
				))}
			</div>
			<div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-lg">
				<InputField
					className="w-full"
					value={search}
					onChange={setSearch}
					label="جستجو"
					rtl
				/>
				<InputField
					className="w-full"
					value={subTitle}
					// onChange={setSearch}
					label="دسته بندی"
					rtl
				/>
				<InputField
					className="w-full"
					value={priceFrom.toString()}
					onChange={(e) => {
						setPriceFrom(parseInt(e));
					}}
					label="حداقل قیمت"
					type="number"
					rtl
				/>
				<InputField
					className="w-full"
					value={priceTo.toString()}
					onChange={(e) => {
						setPriceTo(parseInt(e));
					}}
					label="حداکثر قیمت"
					type="number"
					rtl
				/>
				<Button
					text="فیلتر کن"
					accent="cyan"
					onClick={() => {
						refetch();
					}}
				/>
			</div>
		</div>
	);
}

type Props = {
	product: Product;
};
function ProductView({ product }: Props) {
	const { data: images } = useQuery([`images-${product.productId}`], () =>
		GetProductImages(product.productId)
	);
	const { data: sales } = useQuery([`product-sales-${product?.productId}`], () =>
		GetSales(undefined, product.productId)
	);

	return (
		<div className="bg-white border p-3 m-0.5 border-gray-300 rounded-md flex flex-col items-center">
			<img
				className="w-full object-contain aspect-square rounded-md border border-gray-200 justify-between h-full"
				src={images && images.length > 0 ? images[0].imageUrl : ""}
			/>
			<p className=" text-center font-medium">{product.name}</p>
			<p className=" text-center text-sm font-medium">
				<span className="font-semibold">وضعیت: </span>
				{ProductStateToString(product.state)}
			</p>
			<p className="text-gray-400">{sales?.length} فروشنده</p>
		</div>
	);
}
