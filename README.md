# React Rating

React Rating is a react rating component which supports custom symbols both with inline styles and icon.

This React component was inspired by the [dreyescat/react-rating](https://github.com/dreyescat/react-rating) library. Rewritten in components and typescript.

## Demo

In progress.

## Installation

You can install `react-rating` component using the _npm_ package manager:

```bash
npm i @chepchik/react-rating
```

## Usage

```jsx
import { Rating } from "@chepchik/react-rating";

<Rating
	value={rating}
	placeholderValue={rating}
	readonly={false}
	emptySymbol={<Star size={22} fill='#babfc7' stroke='#babfc7' />}
	fullSymbol={<Star size={22} fill={"#FFD703"} stroke={"#FFD703"} />}
	onClick={handleRatingClick}
/>;
```

## Properties

| Prop Name           | Type                                                                                                     | Default Value                                                    | Description                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| `totalSymbols`      | `number`                                                                                                 | `5`                                                              | Total number of symbols (stars).                                    |
| `value`             | `number`                                                                                                 | -                                                                | Current rating value. Must be >= 0.                                 |
| `placeholderValue`  | `number`                                                                                                 | -                                                                | Placeholder value displayed on hover or when the rating is not set. |
| `readonly`          | `boolean`                                                                                                | `false`                                                          | If `true`, the rating becomes read-only.                            |
| `quiet`             | `boolean`                                                                                                | `false`                                                          | If `true`, event handling occurs only on touch.                     |
| `fractions`         | `number`                                                                                                 | `1`                                                              | Support for fractional values (e.g., 0.5).                          |
| `direction`         | `"ltr" or "rtl"`                                                                                         | `"ltr"`                                                          | Text direction: left-to-right (`ltr`) or right-to-left (`rtl`).     |
| `emptySymbol`       | `string or object or React.ReactElement or Array<string or object or React.ReactElement>` or -           | Customization for the appearance of empty symbols (stars).       |
| `fullSymbol`        | `string or object or React.ReactElement or Array<string or object or React.ReactElement>` or -           | Customization for the appearance of filled symbols (stars).      |
| `placeholderSymbol` | `string or object or React.ReactElement or Array<string or object or React.ReactElement>` or `undefined` | Customization for the appearance of placeholder symbols (stars). |
| `onClick`           | `(value: number, event: React.MouseEvent or React.TouchEvent) => void`                                   | -                                                                | Function called when a symbol is clicked.                           |
| `onHover`           | `(value?: number) => void`                                                                               | `() => {}`                                                       | Function called when hovering over a symbol.                        |
| `className`         | `string`                                                                                                 | -                                                                | CSS class for the root element.                                     |
| `id`                | `string`                                                                                                 | -                                                                | ID for the root element.                                            |
| `style`             | `React.CSSProperties`                                                                                    | -                                                                | Inline styles for the root element.                                 |
| `tabIndex`          | `number`                                                                                                 | -                                                                | `tabindex` attribute value for the root element.                    |
| `aria-label`        | `string`                                                                                                 | -                                                                | `aria-label` attribute for accessibility.                           |

---

### _I would be glad for your support_
