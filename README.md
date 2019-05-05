## How to use a metamask in browser.

메타마스크가 설치된 browser에서는 metamask가 자동으로 `window.ethereum`을 주입해주고 메타마스크와 관련된 모든 api는 `window.etheurem`을 통해 호출할수 있다.
### how to detect metamask
```
if (typeof window.ethereum === 'undefined') {
  alert('Looks like you need a Dapp browser to get started.')
  alert('Consider installing MetaMask!')

} else {
  // can use a metamask
}
```
### logging in
`window.ethereum.enable()`를 통해 metamask의 accounts 정보를 가져 올 수 있다. 기본적으로 mainnet의 계정을 가져오고 
`ethereum.selectedAddress` 값 설정을 통해 원하는 블록체인 네트워크의 계정을 가져올 수 있다.  
```$xslt
const accounts = await window.ethereum.enable()
const account = accounts[0]
```

### Execute transaction
`window.ethereum.sendAsync()`를 통해 transaction을 발생시킬 수 있다. `from`에 account 정보를 넣어준다.
```$xslt
const method = 'eth_sendTransaction'
const parameters = [{
    from: account,
    to: yourAddress,
    value: value,
}]
const from = account

// Now putting it all together into an RPC request:
const payload = {
    method: method,
    params: parameters,
    from: from,
}

// Methods that require user authorization like this one will prompt a user interaction.
// Other methods (like reading from the blockchain) may not.
ethereum.sendAsync(payload, function (err, response){
 ...
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
