var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { j as jsxRuntime, u as useMDXComponents, r as react, M as MDXProvider, R as ReactDOM, a as React } from "./vendor.ff0ab193.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index = "";
var logo = "/slide-aws-cdk-conference-japan/assets/logo.ecc203fb.svg";
var App$1 = "";
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      h1: "h1"
    }, useMDXComponents(), props.components);
    return jsx(_components.h1, {
      children: "hoge"
    });
  }
}
function App() {
  const [count, setCount] = react.exports.useState(0);
  const components = {
    em: (props) => /* @__PURE__ */ jsx("i", __spreadValues({}, props))
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "App-header",
      children: [/* @__PURE__ */ jsx("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }), /* @__PURE__ */ jsx("p", {
        children: "Hello Vite + React!"
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsxs("button", {
          type: "button",
          onClick: () => setCount((count2) => count2 + 1),
          children: ["count is: ", count]
        })
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Edit ", /* @__PURE__ */ jsx("code", {
          children: "App.jsx"
        }), " and save to test HMR updates."]
      }), /* @__PURE__ */ jsxs("p", {
        children: [/* @__PURE__ */ jsx("a", {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Learn React"
        }), " | ", /* @__PURE__ */ jsx("a", {
          className: "App-link",
          href: "https://vitejs.dev/guide/features.html",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Vite Docs"
        })]
      })]
    }), /* @__PURE__ */ jsx(MDXProvider, {
      components,
      children: /* @__PURE__ */ jsx(MDXContent, {})
    })]
  });
}
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}), document.getElementById("root"));
