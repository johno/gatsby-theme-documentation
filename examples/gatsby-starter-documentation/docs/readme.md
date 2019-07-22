# Flow

The [Flow](https://store.framer.com/package/steveruizok/flow) package is an
experimental navigation tool for Framer X. It provides several features that are
currently unsupported by the built-in navigation tool. These features include:

- Navigating from code
- Visual configuration
- Custom transitions
- Swipe interactions
- State preservation

See below for more on each of these topics.

🍕Download the
[**example project**](https://www.dropbox.com/s/0o5mms4hp97f4qs/FlowExample.framerx?dl=0).

## Installation

You can install the Flow component from the
[Framer X Store](https://store.framer.com/package/steveruizok/flow).

- Open the Store tab in Framer X
- Search for **Flow**
- Click **Install**

## Usage

Once you've installed Flow:

### Adding the Flow component

To begin, let's add the component to your Framer X project.

1. Install the Flow component as shown above
2. On the canvas, create a Frame
3. Change the name of the Frame to "Navigation"
4. Open the **Components** panel
5. Drag an instance of the Flow component into the Frame

### Setting up a navigation context

A Flow component's "navigation context" is made up of all of the Frames that the
component may navigate to. We define this context by connecting Frames to the
Flow component.

1. On the canvas, create another two Frames
2. Name the first Frame "Home" and give it some text (such as "Home")
3. Name the second Frame "Profile and give it some text (such as "Profile")
4. Connect the Flow component to the other two Frames

## Using the Link component

With the Link component, you can create transitions to other Frames in the Flow
component's navigation context. There's nothing special about the Link tool, but
we'll cover how it works later on this page.

1. Open the **Components** panel
2. Drag an instance of the Link component into the Frame named Home
3. In the **Properties Panel**, change the selected Link's **Target** to
   `Profile`
4. Select the Frame named Navigation (it contains the Flow component instance)
5. Open the **Preview** by pressing `Command + P`
6. Click on the Link to navigate to the Frame named Profile

## Creating "Previous" links

You can also use the Link component to create "previous" or "back" links. With
the Flow component, each time you navigate to a new Frame, you add that Frame to
a "stack" of visited Frames. A "previous" link allows you to navigate back
through that stack.

1. Open the **Components** panel
2. Drag a second instance of the Link component into the Frame named Navigation
3. In the **Properties Panel**, change the selected Link's **Previous** toggle
   to **True**
4. Select the Frame named Navigation
5. Open the **Preview**
6. Click on the "Home" Link to navigate to the Frame named Profile
7. Click on the "Previous" Link to navigate back to the Frame named Home

## Using the Marker component

With the Marker component, you can add a marker to a Frame, give the marker a
unique name, and then use the marker's name as a navigation target. This
provides an alternative to using a Frame's name as a navigation target.

1. On the canvas, create another Frame
2. Give this Frame some text (such as "Settings")
3. Connect the Flow component to this new Frame
4. Open the **Components** panel
5. Drag an instance of the Marker component into the new Frame
6. In the **Properties Panel**, change the selected Marker's **Name** to
   "Settings"
7. In the Frame named Home, create a second Link instance
8. In the **Properties Panel**, change the second Link's **Target** to
   "Settings"
9. Select the Frame named Navigation
10. Open the **Preview**
11. Click on the "Settings" Link to navigate to the Frame with the Settings
    marker

**Note**: Markers will never appear in the Preview.

## Navigating from code

In addition to using the components described above, you can interact with the
Flow component through your Framer X project's overrides and code components.

1. In the Frame named Profile, create a new Frame
2. Style the new Frame like a button
3. In the **Properties Panel**, click on the row labelled **Override**
4. In the **File** dropdown, select **New File**
5. Click the **Edit Code** button
6. In the file that opens, delete the file's code and replace it with:

```tsx
// App.tsx

import { Override } from 'framer'
// @ts-ignore
import { showNext, showPrevious } from '@framer/steveruizok.flow/code'

export function ShowSettings(): Override {
	return {
		onTap: () => {
			showNext('Settings')
		},
	}
}
```

1. Return to the canvas
2. Select the button's Frame
3. In the **Override** section of the **Properties Panel**, select **App** in
   the **File** dropdown and **ShowSettings** in the **Override** dropdown.
4. Select the Frame named Navigation
5. Open the **Preview**
6. Click on the "Profile" Link to navigate to the Frame with named Profile
7. Click the button with the ShowSettings override to navigate to the Frame with
   the Settings marker

**Note**: You can use import these same methods into code components and use
them in the same way.

## Custom transitions

You can customize the component’s transitions by overriding the Flow component.
the `variants` prop. See the [Flow](/flow) page for more information.
