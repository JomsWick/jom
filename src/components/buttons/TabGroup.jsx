import React, { Fragment, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Fade } from "react-awesome-reveal";
import FlatIcon from "../icons/FlatIcon";
import { Tab } from "@headlessui/react";

const LeftArrow = ({ className, dark }) => {
	const { isFirstItemVisible, scrollPrev } =
		React.useContext(VisibilityContext);

	return (
		<div
			className={`${
				className
				? className
				: "h-full flex items-center px-3 duration-200 border-r cursor-pointer absolute top-0 z-10"
			} ${dark ? "bg-transparent border border-transparent" : "bg-transparent border border-transparent"}`}
			disabled={isFirstItemVisible}
			onClick={() => scrollPrev()}
		>
			<FlatIcon
				icon="rr-angle-circle-left"
				className={`text-lg ${
					isFirstItemVisible ? " opacity-10" : " opacity-100 "
				}`}
			/>
		</div>
	);
};

const RightArrow = ({ className, dark }) => {
	const { isLastItemVisible, scrollNext } =
		React.useContext(VisibilityContext);

	return (
		<div
			className={`${
	className
		? className
		: "h-full flex items-center px-3 duration-200 border-l cursor-pointer absolute top-0 right-0 z-10"
} ${dark ? "bg-transparent border border-transparent" : "bg-transparent border border-transparent"}`}
			onClick={() => scrollNext()}
		>
			<FlatIcon
				icon="rr-angle-circle-right"
				className={`text-lg ${
					isLastItemVisible ? " opacity-10" : " opacity-100"
				}`}
			/>
		</div>
	);
};

const TabGroup = ({
	tabClassName = "",
	arrowClassName = "",
	contentClassName = "",
	scrollContainerClassName = "",
	contents,
	titleChildren,
	dark = false,
}) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
			<Tab.List as="div" className={`relative ${tabClassName}`}>
				<ScrollMenu
					LeftArrow={(props) => <LeftArrow {...props} dark={dark} />}
					RightArrow={(props) => <RightArrow {...props} dark={dark} />}
					scrollContainerClassName={`px-[60px] gap-2 overflow-x-hidden ${scrollContainerClassName}`}
				>
					{contents.map(({ title, i }, index) => (
						<Tab
							as={"div"}
							key={`tab-g-${index}`}
							className={`outline-0`}
						>
							{({ selected }) => (
								<div
									className={`outline-0 relative px-3 py-2 mx-0 flex gap-2 items-center justify-center rounded-lg cursor-pointer duration-200
										${
											dark
											? selected
											? "bg-teal-600 text-white border border-teal-500"
											: "bg-transparent text-teal-300 border border-teal-500 hover:bg-teal-700/20"
											: selected
											? "bg-transparent text-primary"
											: "bg-white text-gray-700 hover:bg-transparent"
										}
									`}
								>
									{typeof title == "function"
										? title({
												selectedIndex: selectedIndex,
												setSelectedIndex:
													setSelectedIndex,
										  })
										: React.cloneElement(title, { selected, dark })
									}
									{!dark && selected && (
										<div
											className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-500"
											style={{
												backgroundImage: "linear-gradient(to right, #14b8a6, #14b8a6)",
												animation: "underlineGrow 0.3s forwards",
												transition: "animation 0.3s ease",
											}}
										/>
									)}
								</div>
							)}
						</Tab>
					))}
					{titleChildren}
				</ScrollMenu>
			</Tab.List>
			<Tab.Panels>
				{contents.map(({ content, i }, index) => (
					<Tab.Panel
						key={`tab-p-${index}`}
						data-headlessui-state={
							selectedIndex == i ? "selected" : ""
						}
						as="div"
						className={`p-3 duration-200 text-base rounded-xl flex flex-col  overflow-auto ${contentClassName} ${
							contentClassName.includes("max-h")
								? ""
								: "max-h-[calc(100vh-300px)] min-h-72"
						} transition-all opacity-100 transform duration-300 ease-in-out`}
						style={{
							opacity: selectedIndex === i ? 0 : 100,
							transform: selectedIndex === i ? "translateY(0)" : "translateY(10px)",
						}}
					>
						<Fade triggerOnce>
                            {
                                typeof content == "function"
                                ? content({
                                        selectedIndex: selectedIndex,
                                        setSelectedIndex: setSelectedIndex,
                                })
                                : content
                            }
                        </Fade>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

export default TabGroup;