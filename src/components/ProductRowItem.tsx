import { useNavigate } from "react-router";
import { Product } from "../models/Product";
import { ProductStateToString } from "../utils/LangUtils";

type Props = {
	product: Product;
};

export default function ProductRowItem({ product }: Props) {
	const navigate = useNavigate();

	return (
		<div
			className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 gap-3 duration-300 hover:bg-blue/10 cursor-pointer"
			dir="rtl"
			onClick={() => navigate(`/products/${product.productId}`)}>
			<div>
				<p className="inline-block text-lg font-medium">{product.name}</p>
				<span className="py-0 px-2 mx-3 text-white bg-blue rounded-full">
					{ProductStateToString(product.state)}
				</span>
			</div>
			<p>
				{product.description.substring(0, 300) + "..."}{" "}
				<a className="text-blue font-medium">ادامه مطلب</a>
			</p>
		</div>
	);
}
