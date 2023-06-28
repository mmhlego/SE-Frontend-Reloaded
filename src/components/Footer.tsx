import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
	return (
		<div className="bg-gray-500 w-full h-52 grid grid-cols-2 px-20 py-5 gap-5 text-white relative">
			<div className="flex flex-col items-start justify-evenly" dir="rtl">
				<p>نشانی: تبریز،بلوار 29 بهمن،دانشگاه تبریز</p>
				<p>تلفن: 3555555-041</p>
				<p>کد پستی: 5166616471</p>
				<p>ایمیل: shop@gmail.com</p>
			</div>
			<div className="flex flex-col items-end justify-evenly">
				<a className="hover:underline" href="/">
					خانه
				</a>
				<a className="hover:underline" href="/rules">
					قوانین
				</a>
				<a className="hover:underline" href="/faq">
					سوالات متداول
				</a>
				<a className="hover:underline" href="/contact-us">
					تماس با ما
				</a>
			</div>

			<button
				className="absolute w-12 h-12 rounded-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-500 bg-white -top-6 right-10 grid place-items-center"
				onClick={() => window.scrollTo(0, 0)}>
				<AiOutlineArrowUp className="scale-[2] pointer-events-none" />
			</button>
		</div>
	);
}
