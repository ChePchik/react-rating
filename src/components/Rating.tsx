import React, { useState, useEffect } from "react";
import Symbol from "./RatingSymbol";

interface RatingProps {
	totalSymbols?: number;
	// Общее количество символов (звездочек).
	value: number; // Always >= 0
	placeholderValue: number;
	readonly?: boolean;
	quiet?: boolean;
	fractions?: number;
	direction?: "ltr" | "rtl";
	emptySymbol: string | object | React.ReactElement | Array<string | object | React.ReactElement>;
	fullSymbol: string | object | React.ReactElement | Array<string | object | React.ReactElement>;
	placeholderSymbol?:
		| string
		| object
		| React.ReactElement
		| Array<string | object | React.ReactElement>;
	onClick: (value: number, event: React.MouseEvent | React.TouchEvent) => void;
	onHover?: (value?: number) => void;
	className?: string;
	id?: string;
	style?: React.CSSProperties;
	tabIndex?: number;
	"aria-label"?: string;
}

const Rating: React.FC<RatingProps> = ({
	totalSymbols = 5,
	value,
	placeholderValue,
	readonly = false,
	// Рейтинг редактируемый
	quiet = false,
	// Включает обработку событий при касании
	// будет ли отображаться при наведении
	fractions = 1,
	// Поддержка дробных значений (например, 0.5).
	direction = "ltr",
	// Направление текста
	emptySymbol,
	// Настройка внешнего вида звездочек
	fullSymbol,
	// Настройка внешнего вида звездочек
	placeholderSymbol = undefined,
	// Отображаемое значение при наведении или текущее значение, если наведения нет.
	onClick,
	onHover = () => {},
	className,
	id,
	style,
	tabIndex,
	"aria-label": ariaLabel,
}) => {
	const [displayValue, setDisplayValue] = useState(value);
	const [interacting, setInteracting] = useState(false);

	useEffect(() => {
		if (value !== displayValue) {
			setDisplayValue(value);
		}
	}, [value]);

	useEffect(() => {
		if (!interacting && displayValue !== value) {
			onHover(undefined);
		} else if (interacting && value === displayValue) {
			onHover(displayValue);
		}
	}, [interacting, displayValue, value, onHover]);

	const calculateHoverPercentage = (event: React.MouseEvent | React.TouchEvent): number => {
		const clientX =
			"touches" in event
				? "changedTouches" in event
					? event.changedTouches[0].clientX
					: // @ts-ignore
					  event.touches[0].clientX
				: event.clientX;

		const targetRect = (event.target as HTMLElement).getBoundingClientRect();
		const delta = direction === "rtl" ? targetRect.right - clientX : clientX - targetRect.left;

		return delta < 0 ? 0 : delta / targetRect.width;
	};

	const calculateDisplayValue = (
		symbolIndex: number,
		event: React.MouseEvent | React.TouchEvent,
	): number => {
		const percentage = calculateHoverPercentage(event);
		const fraction = Math.ceil((percentage % 1) * fractions) / fractions;
		const precision = 10 ** 3;
		const displayValue =
			symbolIndex + (Math.floor(percentage) + Math.floor(fraction * precision) / precision);

		return displayValue > 0
			? displayValue > totalSymbols
				? totalSymbols
				: displayValue
			: 1 / fractions;
	};

	const handleSymbolMouseMove = (
		symbolIndex: number,
		event: React.MouseEvent | React.TouchEvent,
	) => {
		if (readonly) return;

		const value = calculateDisplayValue(symbolIndex, event);
		setDisplayValue(value);
		setInteracting(true);
	};

	const handleSymbolClick = (symbolIndex: number, event: React.MouseEvent | React.TouchEvent) => {
		const value = calculateDisplayValue(symbolIndex, event);
		onClick(value, event);
	};

	const handleSymbolEnd = (symbolIndex: number, event: React.TouchEvent) => {
		if (!quiet) {
			handleSymbolClick(symbolIndex, event);
			event.preventDefault();
		}
		onMouseLeave();
	};

	const onMouseLeave = () => {
		setDisplayValue(value);
		setInteracting(false);
	};

	const shouldDisplayPlaceholder = placeholderValue !== 0 && value === 0 && !interacting;

	const renderedValue = shouldDisplayPlaceholder ? placeholderValue : quiet ? value : displayValue;

	const fullSymbols = Math.floor(renderedValue);

	const symbolNodes = Array.from({ length: totalSymbols }).map((_, i) => {
		const percent =
			i - fullSymbols < 0 ? 100 : i - fullSymbols === 0 ? (renderedValue - i) * 100 : 0;

		const empty = Array.isArray(emptySymbol) ? emptySymbol : [emptySymbol];
		const full = Array.isArray(fullSymbol) ? fullSymbol : [fullSymbol];
		const placeholder = placeholderSymbol
			? Array.isArray(placeholderSymbol)
				? placeholderSymbol
				: [placeholderSymbol]
			: [];

		return (
			<Symbol
				key={i}
				index={i}
				readonly={readonly}
				inactiveIcon={empty[i % empty.length]}
				activeIcon={
					shouldDisplayPlaceholder ? placeholder[i % placeholder.length] : full[i % full.length]
				}
				percent={percent}
				direction={direction}
				{...(!readonly && {
					onClick: handleSymbolClick,
					onMouseMove: handleSymbolMouseMove,
					onTouchMove: handleSymbolMouseMove,
					onTouchEnd: handleSymbolEnd,
				})}
			/>
		);
	});

	return (
		<span
			id={id}
			style={{ ...style, display: "inline-block", direction }}
			className={className}
			tabIndex={tabIndex}
			aria-label={ariaLabel}
			{...(!readonly && { onMouseLeave })}
		>
			{symbolNodes}
		</span>
	);
};

export default Rating;
