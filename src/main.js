"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var app_js_1 = require("./app.js");
client_1.default.createRoot(document.getElementById('root')).render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(app_js_1.default, null)));
console.log('main.tsx reached');
