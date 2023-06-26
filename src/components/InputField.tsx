import { twMerge } from "tailwind-merge";
import { PrimaryColors } from "../models/Types";

type Props = {
	value: string;
	label?: string;
	accent?: "" | PrimaryColors;
	hint?: string;
	disabled?: boolean;
	rtl?: boolean;
	className?: string;
	onChange?: (value: string) => void;
};

export default function InputField({
	value,
	label = "",
	accent = "",
	hint = "",
	disabled = false,
	rtl = false,
	className,
	onChange
}: Props) {
	const color = disabled ? "gray-300" : accent === "" ? "gray-400" : accent;

	return (
		<div
			className={twMerge(
				"shadow-lg shadow-black/15 h-10 w-36 border-2 border-blue rounded-lg bg-gray-100 p-1.5 relative",
				`bg-${color}/10 border-${color}`,
				hint ? "mb-4" : "",
				disabled ? "cursor-not-allowed" : "",
				className
			)}
			dir={rtl ? "rtl" : "ltr"}>
			<p
				className={twMerge(
					`absolute duration-300 bg-white pointer-events-none mt-0.5`,
					value ? "-mt-4 font-normal text-xs" : "mx-1.5 font-semibold text-sm",
					`after:absolute after:left-0 after:bg-${color}/10 after:w-full after:bottom-0 after:duration-300`,
					value ? `after:h-1/2` : `after:h-full`,
					disabled ? "text-gray-400" : ""
				)}>
				{label}
			</p>
			<input
				value={value}
				onChange={(e) => {
					onChange && onChange(e.target.value);
				}}
				className={twMerge(
					"w-full h-full outline-none bg-transparent",
					disabled ? "cursor-not-allowed" : ""
				)}
				disabled={disabled}
			/>
			<p className="text-xs mt-2 font-light italic">{hint}</p>
		</div>
	);
}
