import { useMutation, useQuery } from "@tanstack/react-query";
import { ReactNode, useContext, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainContext } from "../Context/MainContext";
import { GetComments, SendComment } from "../apis/General/CommentApis";
import { GetAllSubcategories } from "../apis/Products/CategoryApis";
import { GetProduct, GetProductImages } from "../apis/Products/ProductApis";
import { GetSales } from "../apis/SaleApis";
import Button from "../components/Button";
import SaleRowItem from "../components/SaleRowItem";
import { ProductStateToString } from "../utils/LangUtils";

export default function ProductPage() {
	const { productId } = useParams();
	const ctx = useContext(MainContext);

	if (productId === undefined) {
		return <Navigate to="/products" />;
	}

	const [sub, setSub] = useState("");
	const [newComment, setNewComment] = useState("");

	const { data: product } = useQuery([productId], () => GetProduct(productId));

	const { data: images } = useQuery([`images-${productId}`], () => GetProductImages(productId));

	const { data: sales } = useQuery([`product-sales-${product?.productId}`], () =>
		GetSales(undefined, productId)
	);

	const tomorrow = new Date();
	tomorrow.setDate(new Date().getDate() + 1);

	const {} = useQuery(["subcategories"], () => GetAllSubcategories(), {
		onSuccess(res) {
			if (Array.isArray(res) && res.filter((r) => r.id === product?.subcategoryId).length > 0)
				setSub(res.filter((r) => r.id === product?.subcategoryId)[0].title);
		},
		enabled: product?.subcategoryId !== undefined
	});

	const { data: comments } = useQuery([`comments-${productId}`], () =>
		GetComments(100, tomorrow, productId)
	);

	const { isLoading, mutate: sendComment } = useMutation(() =>
		SendComment(productId, newComment)
	);

	return (
		<div dir="rtl" className="py-6">
			<Section title="فروشندگان">
				{sales?.map((sale) => (
					<div
						key={sale.id}
						className="w-full border border-gray-300 rounded-xl p-5 grid grid-cols-3 gap-3 items-center">
						<p className="col-span-3 text-center font-semibold">{product?.name}</p>
						<p className="">
							<span className="font-bold">قیمت: </span>
							{sale.price} تومان
						</p>
						<p className="">
							<span className="font-bold">موجودی: </span>
							{sale.amount} عدد
						</p>
						<Button text="مشاهده کالا" className="py-1" onClick={() => {}} />
					</div> // TODO
				))}
			</Section>
			<Section title="گالری تصاویر">
				<Swiper
					modules={[SwiperNavigation, SwiperPagination]}
					slidesPerView={3}
					spaceBetween={30}
					navigation
					pagination
					centeredSlides={true}
					className="w-full max-h-64 bg-gray-100 rounded-lg"
					dir="ltr">
					{images?.map((image) => (
						<>
							<SwiperSlide key={image.id} className="h-fit w-fit">
								<img
									key={image.id}
									className="aspect-square w-56 h-56 border rounded-lg border-gray-300"
									src={image.imageUrl}
								/>
							</SwiperSlide>
						</>
					))}
				</Swiper>
			</Section>
			<Section title="اطلاعات کلی">
				<p className="p-2">
					<span className="font-semibold">نام محصول: </span>
					{product?.name}
				</p>
				<p className="p-2">
					<span className="font-semibold">زیردسته بندی: </span>
					{sub}
				</p>
				<p className="p-2">
					<span className="font-semibold">وضعیت محصول: </span>
					{ProductStateToString(product?.state)}
				</p>
				<p className="p-2">
					<span className="font-semibold">تعداد فروشندگان: </span>
					{sales?.length}
				</p>
			</Section>
			<Section title="مشخصات">
				{product?.description.split("•").map((d) => (
					<p className="mb-2">{d}</p>
				))}
			</Section>
			<Section title="نظرات">
				{comments?.length == 0 && (
					<p className="text-lg font-medium text-center">نظری ثبت نشده است</p>
				)}
				<p>
					{comments?.map((comment) => (
						<>
							<p key={comment.id}>{comment.content}</p>
						</>
					))}
				</p>
				{ctx.loggedIn && ctx.role === "Customer" && (
					<>
						<textarea
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							rows={4}
							className="border border-gray-300 my-3 p-2 rounded-lg resize-none"
						/>
						<Button
							text="ارسال نظر"
							className="py-1"
							onClick={() => {
								if (newComment.trim().length > 0) {
									sendComment();
								}
							}}
							disabled={isLoading}
						/>
					</>
				)}
			</Section>
		</div>
	);
}

type Props = {
	title: string;
	children?: ReactNode;
};
function Section({ title, children }: Props) {
	return (
		<div className="px-5 flex flex-col mb-5" dir="rtl">
			<p className="border-b-[3px] w-fit border-orange pl-3 font-semibold text-lg mb-5">
				{title}
			</p>
			{children}
		</div>
	);
}
