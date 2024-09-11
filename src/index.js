"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.scss");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById('root'));
