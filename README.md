## Slot Machine

## Components


  1. BalanceInput: for balance input
  2. Checkbox: for switch off/on debug mode
  3. SpinButton: for starting spinning
  4. SymbolSelect: select which contains all symbols for debug mode
  5. PositionSelect: select which constains positions (left, center, right) for debug mode
  6. DebugArea: for keeping Components (BalanceInput, Checkbox, SpinButton, SymbolSelect, PositionSelect) 
  7. Reel: which contains reel images
  8. ReelsTable: which contains three Reel Component
  9. PayTable: where are noted prizes for combination
    
    Also we have a file lib/Constants where we keep our constants

 I have not used redux as the project are simple for it :)  
 
## Animation:

      Each Reel contains 10 images(Symbols)
          first images is first half of 3XBAR image
          second image is second half of 3XBAR image
          third image is first half of BAR image
          fourth images is second half of Bar image
         etc... 
          (because we should have an order like 3XBAR, BAR, 2XBAR, SEVEN, CHERRY)
          (that data is kept on Reel/Reel.js as const mapValueToImage variable)
      We have the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] which keeps the order of images(Symbols) 
      After click Spin bottom we generate random number from 1-10 range 
                e.g  if it genereted 4 we cut the array 
                        [1,2,3]
                        [4,5,6,7,8,9,10]
                and concat them like [4, 5, 6, 7, 8, 9, 10, 1, 2, 3] (on this time the first images is image with 4 index from varable mapValueToImage(Reel/Reel.js as const mapValueToImage variable))       
      I have used requestAnimationFrame for animation, which gets callback and call it every 16 milliseconds.
      The callback of requestAnimationFrame is tick function on Reel.js which reels the array  by one index.
      And we call the callback while the timer of that reel is not finished.  
        
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
