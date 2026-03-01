const MenuTitle = ({ src, children, className, dark = false, selected = false, }) => {
	return (
		<div
			className={`flex flex-row items-center overflow-visible justify-center gap-2 py-0 min-w-32 ${
				className || ""
			}`}
		>
			<img
				src={src}
				className={`
					h-5 object-contain
					${selected ? "opacity-100" : "opacity-80"} 
					${dark && !selected ? "filter invert" : ""}
					${className}
				`}
				alt=""
			/>
			<span className="text-xs font-semibold ">{children}</span>
		</div>
	);
};

export default MenuTitle;
