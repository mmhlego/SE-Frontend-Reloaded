import { twMerge } from "tailwind-merge";

type Props = {
	label: string;
	group: string;
	disabled?: boolean;
	defaultChecked?: boolean;
	className?: string;
	onChange?: (value: boolean) => void;
};

export default function RadioButton({
	label,
	group,
	disabled = false,
	defaultChecked = false,
	className,
	onChange
}: Props) {
	return (
		<div className={twMerge("flex gap-1.5 items-center", className)}>
			<input
				className={twMerge(
					"shadow-lg shadow-black/15 w-5 h-5 relative outline-none appearance-none after:h-full after:w-full after:bg-transparent after:border-2 after:border-gray-300 after:absolute after:rounded-full after:duration-200 cursor-pointer",
					"checked:after:bg-cyan checked:after:border-transparent",
					"before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:z-10 before:m-1"
				)}
				type="radio"
				id={label}
				name={group}
				defaultChecked={defaultChecked}
				disabled={disabled}
				onChange={(e) => onChange && onChange(e.target.checked)}
			/>
			<label htmlFor={label}>Second Item</label>
		</div>
	);
}
