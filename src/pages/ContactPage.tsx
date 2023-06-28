export default function ContactPage() {
	return (
		<div className="grid grid-cols-3 p-8 gap-6">
			<Developer
				name="محمدمهدی حجازی"
				github="https://github.com/mmhlego"
				image="https://avatars.githubusercontent.com/u/48334024?v=4"
				email="hejazi.m.mahdi@gmail.com"
			/>
			<Developer
				name="عرفان زادسلطانی"
				github="https://github.com/erfanzadsoltani"
				image="https://avatars.githubusercontent.com/u/78504671?v=4"
				email="erfanzadsoltani1@gmail.com"
			/>
			<Developer
				name="مهسا فرامرزی"
				github="https://github.com/mahsafmz"
				image="https://avatars.githubusercontent.com/u/82115620?v=4"
				email="mahsafaramarzi1381@gmail.com"
			/>
		</div>
	);
}

type Props = {
	name: string;
	github: string;
	image: string;
	email: string;
};
function Developer({ name, github, image, email }: Props) {
	return (
		<div className="w-full py-16 px-5 bg-gray-100 border border-gray-300 rounded-2xl flex flex-col items-center gap-5 shadow-lg hover:shadow-sm duration-300">
			<img className="aspect-square w-24 h-24 rounded-full" src={image} />
			<p className="text-lx font-semibold">{name}</p>
			<a target="_blank" className="cursor-pointer text-gray-400" href={"mailto:" + email}>
				{email}
			</a>
			<a target="_blank" className="cursor-pointer text-gray-400" href={github}>
				{github}
			</a>
		</div>
	);
}
