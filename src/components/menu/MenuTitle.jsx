const MenuTitle = ({
	src,
	children,
	className = "",
	dark = false,
	selected = false,
}) => {
	return (
		<div
			className={`
				flex items-center justify-center gap-2
				px-2 sm:px-3
				min-w-[90px] sm:min-w-[110px] md:min-w-[130px]
				${className}
			`}
			>
			<img
				src={src}
				alt=""
				className={`
				h-4 sm:h-5 md:h-6
				object-contain
				transition duration-200
				${selected ? "opacity-100" : "opacity-70"}
				${dark && !selected ? "invert" : ""}
				`}
			/>

			<span className="
				text-[10px]
				sm:text-xs
				md:text-sm
				font-semibold
				whitespace-nowrap
			">
				{children}
			</span>
		</div>
	);
};

export default MenuTitle;