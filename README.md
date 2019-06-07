# Gift card form

Form allows user apply their gift card to get a discount.<br>
Form is not visible by default, to show it you have to select the checkbox.<br>
Form validates by checking the length of the card number (should be 19 digits) and security code (should not be empty). If the field is not valid, border color turns to red. Form fields accept only numeric input.<br>

After succesful submit, `fetch` request sends the number and security code to the simple backend based on the `json-server` to find the match. If no match is found, a message is displayed. Otherwise, the gift card is applied and displayed above the form.<br>

Available card list is described below. Also you can find the whole listing in the `src/db.json` file.<br>
```js
[
  { "number": "1234567890000000000", "code": "123" },
  { "number": "1000000000000000001", "code": "101" },
  { "number": "9999999999999999999", "code": "999" },
]
```
## Running the project
### `npm run go` or `yarn go`

Initially install the project dependencies by running `npm install` or `yarn` in the project directory. After that you can run `npm run go` or `yarn go` to run both the `create-react-app` development server and `json-server`. This can be possible with a `concurrently` package, which runs separate processes in a single command.<br>

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
