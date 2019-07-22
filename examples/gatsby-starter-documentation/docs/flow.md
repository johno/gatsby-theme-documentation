# Flow

The `Flow` component is the core of the Flow package. The component:

- has a "context" of connected Frames
- manages a "stack" of visited Frames
- displays the correct Frame as a user navigates
- responds to the `showNext` and `showPrevious` functions

| Prop            | Type                              | Default                |
| --------------- | --------------------------------- | ---------------------- |
| `pages`         | `ReactNode[]`                     | `[]`                   |
| `variants`      | `object`                          | See **Variants** below |
| `swipe`         | `boolean`                         | `true`                 |
| `swipeDistance` | `number`                          | `32`                   |
| `unmountHidden` | `boolean`                         | `false`                |
| `onSwipeLeft`   | `(name, position, stack) => void` | `() => null`           |
| `onSwipeRight`  | `(name, position, stack) => void` | `() => null`           |
| `onSwipeUp`     | `(name, position, stack) => void` | `() => null`           |
| `onSwipeDown`   | `(name, position, stack) => void` | `() => null`           |
| `onChangePage`  | `(name, position, stack) => void` | `() => null`           |

## Variants

The Flow component takes three variants. These control the component's
transitions.

- When responding to a `showNext` call, the component will animate its old
  current Frame from `current` to `behind` while animating the new current Frame
  from `ahead` to `current`.
- When responding to a `showPrevious` call, the component will animate its old
  current Frame from `current` to `ahead` while animating the new current Frame
  from `behind` to `current`.

Its defaults are:

```ts
const variants = {
	behind: {
		x: '0%',
		filter: 'brightness(50%)',
		transition: {
			ease: [0.23, -0.04, 0.31, 1.01],
			duration: 0.36,
		},
	},
	current: {
		x: '0%',
		filter: 'brightness(100%)',
		transition: {
			ease: [0.23, -0.04, 0.31, 1.01],
			duration: 0.36,
		},
	},
	ahead: {
		x: '100%',
		filter: 'brightness(100%)',
		transition: {
			ease: [0.23, -0.04, 0.31, 1.01],
			duration: 0.28,
		},
	},
}
```

## onChangePage

Each time the user navigates to a new Frame, the Flow component will call the
`onChangePage` event with the following arguments:

- `name` - the name of the current navigation target
- `position` - the component's current position in the navigation stack
- `stack` - the component's full navigation stack

## Swiping

If the `swipe` prop is set to `true` (its default value), the Flow component
will respond to swipe events. You can customize the minimum distance for a swipe
through the `swipeDistance` property, and use the four events below to respond
to swipes in different directions:

- `onSwipeLeft`
- `onSwipeRight`
- `onSwipeUp`
- `onSwipeDown`

Each of these event callbacks will be called with the same arguments as
`onChangePage`.

## unmountHidden

By default, each Frame in the component's stack will remain mounted so long as
the component itself is mounted. While this allows each visited Frame to
preserve its state, it may create problems for some projects. To turn the
feature off and unmount all but the current Frame, set `unmountHidden` to
`true`.
