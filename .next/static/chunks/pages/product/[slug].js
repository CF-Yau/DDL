/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/product/[slug]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct%2F%5Bslug%5D&absolutePagePath=E%3A%5CWeb%5Cecommerce%5Cpages%5Cproduct%5C%5Bslug%5D.js!":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct%2F%5Bslug%5D&absolutePagePath=E%3A%5CWeb%5Cecommerce%5Cpages%5Cproduct%5C%5Bslug%5D.js! ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/product/[slug]\",\n      function () {\n        return __webpack_require__(/*! ./pages/product/[slug].js */ \"./pages/product/[slug].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/product/[slug]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZwcm9kdWN0JTJGJTVCc2x1ZyU1RCZhYnNvbHV0ZVBhZ2VQYXRoPUUlM0ElNUNXZWIlNUNlY29tbWVyY2UlNUNwYWdlcyU1Q3Byb2R1Y3QlNUMlNUJzbHVnJTVELmpzIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDREQUEyQjtBQUNsRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/OTQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3Byb2R1Y3QvW3NsdWddXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvcHJvZHVjdC9bc2x1Z11cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct%2F%5Bslug%5D&absolutePagePath=E%3A%5CWeb%5Cecommerce%5Cpages%5Cproduct%5C%5Bslug%5D.js!\n");

/***/ }),

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductDetails = ({\n  product,\n  products\n}) => {\n  _s();\n\n  const {\n    image,\n    name,\n    details,\n    price\n  } = product;\n  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const {\n    decQty,\n    incQty,\n    qty,\n    onAdd,\n    setShowCart\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n\n  const handleBuyNow = () => {\n    onAdd(product, qty);\n    setShowCart(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[index]),\n    className: \"product-detail-image\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small-images-container\"\n  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    key: i,\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n    className: i === index ? 'small-image selected-image' : 'small-image',\n    onMouseEnter: () => setIndex(i)\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"(20)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Details: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"price\"\n  }, \"$\", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"quantity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Quantity:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quantity-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"minus\",\n    onClick: decQty\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"num\"\n  }, qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"plus\",\n    onClick: incQty\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"add-to-cart\",\n    onClick: () => onAdd(product, qty)\n  }, \"Add to Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"buy-now\",\n    onClick: handleBuyNow\n  }, \"Buy Now\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"You may also like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"marquee\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-container track\"\n  }, products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n    key: item._id,\n    product: item\n  }))))));\n};\n\n_s(ProductDetails, \"0IfJpOKNFZo6pJ8JzR9YxW+I0P4=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext];\n});\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksMkZBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR1osUUFBUSxDQUFDYSxHQUFULENBQWNDLElBQUQsaUJBQ1osMkRBQUMsZ0RBQUQ7QUFBUyxPQUFHLEVBQUVBLElBQUksQ0FBQ0UsR0FBbkI7QUFBd0IsV0FBTyxFQUFFRjtBQUFqQyxJQURELENBREgsQ0FERixDQUZKLENBbERGLENBREY7QUErREQsQ0ExRUQ7O0dBQU1oQjtVQUdnREQ7OztLQUhoREM7O0FBZ0hOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlGaWxsU3RhciwgQWlPdXRsaW5lU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuXHJcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5cclxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZSwgbmFtZSwgZGV0YWlscywgcHJpY2UgfSA9IHByb2R1Y3Q7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGRlY1F0eSwgaW5jUXR5LCBxdHksIG9uQWRkLCBzZXRTaG93Q2FydCB9ID0gdXNlU3RhdGVDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eU5vdyA9ICgpID0+IHtcclxuICAgIG9uQWRkKHByb2R1Y3QsIHF0eSk7XHJcblxyXG4gICAgc2V0U2hvd0NhcnQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZSAmJiBpbWFnZVtpbmRleF0pfSBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtaW1hZ2VzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7aW1hZ2U/Lm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpdGVtKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gaW5kZXggPyAnc21hbGwtaW1hZ2Ugc2VsZWN0ZWQtaW1hZ2UnIDogJ3NtYWxsLWltYWdlJ31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SW5kZXgoaSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1kZXNjXCI+XHJcbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cclxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICgyMClcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDQ+RGV0YWlsczogPC9oND5cclxuICAgICAgICAgIDxwPntkZXRhaWxzfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgIDxoMz5RdWFudGl0eTo8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWludXNcIiBvbkNsaWNrPXtkZWNRdHl9PjxBaU91dGxpbmVNaW51cyAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1cIj57cXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbHVzXCIgb25DbGljaz17aW5jUXR5fT48QWlPdXRsaW5lUGx1cyAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIiBvbkNsaWNrPXsoKSA9PiBvbkFkZChwcm9kdWN0LCBxdHkpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXktbm93XCIgb25DbGljaz17aGFuZGxlQnV5Tm93fT5CdXkgTm93PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgyPllvdSBtYXkgYWxzbyBsaWtlPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyIHRyYWNrXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpdGVtLl9pZH0gcHJvZHVjdD17aXRlbX0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicHJvZHVjdFwiXSB7XHJcbiAgICBzbHVnIHtcclxuICAgICAgY3VycmVudFxyXG4gICAgfVxyXG4gIH1cclxuICBgO1xyXG5cclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IFxyXG4gICAgICBzbHVnOiBwcm9kdWN0LnNsdWcuY3VycmVudFxyXG4gICAgfVxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH19KSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7c2x1Z30nXVswXWA7XHJcbiAgY29uc3QgcHJvZHVjdHNRdWVyeSA9ICcqW190eXBlID09IFwicHJvZHVjdFwiXSdcclxuICBcclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9kdWN0cywgcHJvZHVjdCB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlGaWxsU3RhciIsIkFpT3V0bGluZVN0YXIiLCJ1cmxGb3IiLCJQcm9kdWN0IiwidXNlU3RhdGVDb250ZXh0IiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJpbWFnZSIsIm5hbWUiLCJkZXRhaWxzIiwicHJpY2UiLCJpbmRleCIsInNldEluZGV4IiwiZGVjUXR5IiwiaW5jUXR5IiwicXR5Iiwib25BZGQiLCJzZXRTaG93Q2FydCIsImhhbmRsZUJ1eU5vdyIsIm1hcCIsIml0ZW0iLCJpIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct%2F%5Bslug%5D&absolutePagePath=E%3A%5CWeb%5Cecommerce%5Cpages%5Cproduct%5C%5Bslug%5D.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);