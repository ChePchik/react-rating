import React, { JSX, MouseEvent, TouchEvent } from "react";

// Helper function to determine the corresponding React node for an icon.
const getIconNode = (icon: string | object | React.ReactElement): JSX.Element | null => {
	// If it is already a React Element just return it.
	if (React.isValidElement(icon)) {
		return icon;
	}
	// If it is an object, try to use it as a CSS style object.
	if (typeof icon === "object" && icon !== null) {
		return <span style={icon as React.CSSProperties} />;
	}
	// If it is a string, use it as class names.
	if (typeof icon === "string") {
		return <span className={icon} />;
	}
	return null;
};

interface RatingSymbolProps {
	index: number;
	inactiveIcon: string | object | React.ReactElement;
	activeIcon: string | object | React.ReactElement;
	percent: number;
	direction: "ltr" | "rtl";
	readonly?: boolean;
	onClick?: (index: number, event: MouseEvent | TouchEvent) => void;
	onMouseMove?: (index: number, event: MouseEvent | TouchEvent) => void;
	onTouchEnd?: (index: number, event: TouchEvent) => void;
}

const RatingSymbol: React.FC<RatingSymbolProps> = ({
	index,
	inactiveIcon,
	activeIcon,
	percent,
	direction,
	readonly = false,
	onClick,
	onMouseMove,
	onTouchEnd,
}) => {
	const backgroundNode = getIconNode(inactiveIcon);
	const showbgIcon = percent < 100;

	const bgIconContainerStyle: React.CSSProperties = showbgIcon ? {} : { visibility: "hidden" };

	const iconNode = getIconNode(activeIcon);

	const iconContainerStyle: React.CSSProperties = {
		display: "inline-block",
		position: "absolute",
		overflow: "hidden",
		top: 0,
		[direction === "rtl" ? "right" : "left"]: 0,
		width: `${percent}%`,
	};

	const containerStyle: React.CSSProperties = {
		cursor: !readonly ? "pointer" : "inherit",
		display: "inline-block",
		position: "relative",
	};

	const handleMouseMove = (e: MouseEvent | TouchEvent) => {
		if (onMouseMove) {
			onMouseMove(index, e);
		}
	};

	const handleMouseClick = (e: MouseEvent | TouchEvent) => {
		if (onClick) {
			e.preventDefault();
			onClick(index, e);
		}
	};

	const handleTouchEnd = (e: TouchEvent) => {
		if (onTouchEnd) {
			onTouchEnd(index, e);
		}
	};

	return (
		<span
			style={containerStyle}
			onClick={handleMouseClick}
			onMouseMove={handleMouseMove}
			onTouchMove={handleMouseMove}
			onTouchEnd={handleTouchEnd}
		>
			<span style={bgIconContainerStyle}>{backgroundNode}</span>
			<span style={iconContainerStyle}>{iconNode}</span>
		</span>
	);
};

export default RatingSymbol;
