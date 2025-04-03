# React Rating

React Rating — это компонент рейтинга react, который поддерживает пользовательские символы.

Этот компонент React был вдохновлен библиотекой [dreyescat/react-rating](https://github.com/dreyescat/react-rating). Переписан на компоненты и typescript.

## Demo

В процессе.

## Установка

Вы можете установить компонент `react-rating` с помощью менеджера пакетов _npm_:

```bash
npm i @chepchik/react-rating
```

## Использование

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

## Характеристики

| Название props      | Тип                              | Значение по умолчанию | Описание                                                                                |
| ------------------- | -------------------------------- | --------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ | -------------------- | ----------- | --------------------------------------------------------- |
| `totalSymbols`      | `number`                         | `5`                   | Общее количество символов (звездочек).                                                  |
| `value`             | `number`                         | -                     | Текущее значение рейтинга. Должно быть >= 0.                                            |
| `placeholderValue`  | `number`                         | -                     | Значение, которое отображается как placeholder при наведении или если рейтинг не задан. |
| `readonly`          | `boolean`                        | `false`               | Если `true`, рейтинг становится доступным только для чтения.                            |
| `quiet`             | `boolean`                        | `false`               | Если `true`, обработка событий происходит только при касании.                           |
| `fractions`         | `number`                         | `1`                   | Поддержка дробных значений (например, 0.5).                                             |
| `direction`         | `"ltr"                           | "rtl"`                | `"ltr"`                                                                                 | Направление текста: слева направо (`ltr`) или справа налево (`rtl`). |
| `emptySymbol`       | `string                          | object                | React.ReactElement                                                                      | Array<string                                                         | object | React.ReactElement>` | -           | Настройка внешнего вида пустых символов (звездочек).      |
| `fullSymbol`        | `string                          | object                | React.ReactElement                                                                      | Array<string                                                         | object | React.ReactElement>` | -           | Настройка внешнего вида заполненных символов (звездочек). |
| `placeholderSymbol` | `string                          | object                | React.ReactElement                                                                      | Array<string                                                         | object | React.ReactElement>` | `undefined` | Настройка внешнего вида placeholder-символов (звездочек). |
| `onClick`           | `(value: number, event) => void` | -                     | Функция, вызываемая при клике на символ.                                                |
| `onHover`           | `(value?: number) => void`       | `() => {}`            | Функция, вызываемая при наведении курсора на символ.                                    |
| `className`         | `string`                         | -                     | CSS-класс для корневого элемента.                                                       |
| `id`                | `string`                         | -                     | ID корневого элемента.                                                                  |
| `style`             | `style`                          | -                     | Inline-стили для корневого элемента.                                                    |
| `tabIndex`          | `number`                         | -                     | Значение атрибута `tabindex` для корневого элемента.                                    |
| `aria-label`        | `string`                         | -                     | Атрибут `aria-label` для доступности.                                                   |

_Буду рад вашей поддержке_
