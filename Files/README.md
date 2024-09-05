# A-Frame: Manipulate 3D Model

This example allows the user to position, scale, and rotate an object using raycasting and gesture inputs.

![](https://media.giphy.com/media/6sWoOFGEDIz1e2K0P7/giphy.gif)

### About this project

Learn more about how this project was made and how to make it your own in [lesson 3 of 8cademy](https://www.notion.so/8cademy/Lesson-3-Animations-Assets-and-A-Frame-ed19e288ae344a64b98e5849a2b0a48e).

### Project Components

`xrextras-gesture-detector` is required in your `<a-scene>` for xrextras gesture components
to function correctly.

- element: the element touch event listeners are added to (default: '')

`xrextras-hold-drag` lifts up and drags around its entity on finger down/drag. The entity must receive raycasts.

- cameraId: the id of the `<a-camera>`(default: 'camera')
- groundId: the id of the ground `<a-entity>`(default: 'ground')
- dragDelay: the time required for the user's finger to be down before lifting the object (default: 300)
- riseHeight: how high the object is lifted on the y-axis (default: 1)

`xrextras-pinch-scale`

- min: smallest scale user can pinch to (default: 0.33)
- max: largest scale user can pinch to (default: 3)
- scale: sets initial scale. If set to 0, the object's initial scale is used (default: 0)

`xrextras-one-finger-rotate` lets the user drag across the screen with one finger
to spin an object around its y axis.

- factor: increase this number to spin more given the same drag distance (default: 6)

`xrextras-two-finger-rotate` lets the user drag across the screen with two fingers
to spin an object around its y axis.

- factor: increase this number to spin more given the same drag distance (default: 5)

Check out the source code for these XRExtras components on [Github](https://8th.io/xrextras-components).
