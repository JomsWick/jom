const FlatIcon = ({ icon, className = "" }) => {
	return (
		<i
			className={`
				fi fi-${icon}
				inline-block
				align-middle
				${className || "text-lg sm:text-xl lg:text-2xl"}
			`}
		/>
	);
};

export default FlatIcon;