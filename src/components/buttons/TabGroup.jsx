import React, { Fragment, useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Fade } from "react-awesome-reveal";
import FlatIcon from "../icons/FlatIcon";
import { Tab } from "@headlessui/react";
import { useScreenSize } from "@/hooks/useScreenSize";

const LeftArrow = ({ className, dark, visible }) => {
	const { isFirstItemVisible, scrollPrev } =
		React.useContext(VisibilityContext);

	return (
		<div
			className={`${
				className
				? className
				: "h-full flex items-center px-3 duration-200 border-r cursor-pointer absolute top-0 z-10"
			} ${dark ? "bg-transparent border border-transparent" : "bg-transparent border border-transparent"}`}
			// disabled={isFirstItemVisible}
			style={{
				opacity: isFirstItemVisible ? 0.2 : 1,
				pointerEvents: "auto",
				transition: "opacity 0.3s ease",
			}}
			onClick={() => scrollPrev()}
		>
			<FlatIcon
				icon="rr-angle-circle-left"
				className={`text-lg ${
					isFirstItemVisible ? "opacity-10" : "opacity-100"} ${
					dark ? "text-teal-500" : "text-slate-400"
				}`}
			/>
		</div>
	);
};

const RightArrow = ({ className, dark, visible }) => {
	const { isLastItemVisible, scrollNext } =
		React.useContext(VisibilityContext);

	return (
		<div
			className={`${
				className
					? className
					: "h-full flex items-center px-3 duration-200 border-l cursor-pointer absolute top-0 right-0 z-10"
			} ${dark ? "bg-transparent border border-transparent" : "bg-transparent border border-transparent"}`}
			style={{
				opacity: isLastItemVisible ? 0.2 : 1,
				pointerEvents: "auto",
				transition: "opacity 0.3s ease",
			}}
			onClick={() => scrollNext()}
		>
			<FlatIcon
				icon="rr-angle-circle-right"
				className={`text-lg ${
					isLastItemVisible ? "opacity-10" : "opacity-100"} ${
					dark ? "text-teal-500" : "text-slate-400"
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
  	const [hovering, setHovering] = useState(false);
	const { isMobile } = useScreenSize();
	const [focused, setFocused] = useState(false);
  	const timeoutRef = useRef(null)
	const showArrows = !isMobile && (hovering || focused);

	const triggerArrows = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		timeoutRef.current = setTimeout(() => {
			setHovering(false);
			setFocused(false);
		}, 3000);
	};

	return (
		<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
			<Tab.List
				as="div"
				className={`relative ${tabClassName}`}
				onMouseEnter={() => {
					setHovering(true);
					triggerArrows();
				}}
				onMouseLeave={triggerArrows}
				onMouseMove={triggerArrows}
				onTouchStart={triggerArrows}
				onFocus={() => {
					setFocused(true);
					triggerArrows();
				}}
				onBlur={triggerArrows}
			>
				<ScrollMenu
					LeftArrow={(props) => (
						<div
							style={{
								opacity: isMobile ? 0 : showArrows ? 1 : 0.5,
								pointerEvents: isMobile ? "none" : "auto",
								transition: "opacity 0.3s ease",
							}}
						>
							<LeftArrow {...props} dark={dark} />
						</div>
					)}
					RightArrow={(props) => (
						<div
							style={{
								opacity: isMobile ? 0 : showArrows ? 1 : 0.5,
								pointerEvents: isMobile ? "none" : "auto",
								transition: "opacity 0.3s ease",
							}}
						>
							<RightArrow {...props} dark={dark} />
						</div>
					)}
					scrollContainerClassName={`
						overflow-x-auto scrollbar-auto-hide 
						${isMobile ? "gap-2 pl-4 pr-4 snap-x snap-mandatory" : "overflow-x-hidden px-[60px] gap-4"}
						${scrollContainerClassName}
					`}
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
										border-2
										${dark
										? selected
											? "bg-teal-600 text-white border-teal-600"
											: "bg-transparent text-teal-600 border-teal-600 hover:bg-teal-700/20"
										: selected
											? "bg-transparent text-primary border-transparent"
											: "bg-white text-gray-700 border-transparent hover:bg-transparent"
										} ${isMobile ? "snap-start" : ""}`}
								>
									{typeof title === "function"
										? title({ selectedIndex, setSelectedIndex })
										: React.cloneElement(title, { selected, dark })
									}

									{!dark && (
										<div
											className={`absolute bottom-0 left-0 h-0.5 bg-teal-500 origin-left
											transition-all duration-300 ease-out
											${selected ? "w-full opacity-100" : "w-0 opacity-0"}`}
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
						className={`p-3 duration-200 text-base rounded-xl flex flex-col overflow-auto scrollbar-auto-hide ${contentClassName} ${
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