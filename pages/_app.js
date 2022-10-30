"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var head_1 = require("next/head");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var theme_1 = require("../src/theme");
function MyApp(props) {
    var Component = props.Component, pageProps = props.pageProps;
    react_1["default"].useEffect(function () {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (<react_1["default"].Fragment>
        <head_1["default"]>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </head_1["default"]>
        <styles_1.ThemeProvider theme={theme_1["default"]}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline_1["default"] />
          <Component {...pageProps}/>
        </styles_1.ThemeProvider>
      </react_1["default"].Fragment>);
}
exports["default"] = MyApp;
MyApp.propTypes = {
    Component: prop_types_1["default"].elementType.isRequired,
    pageProps: prop_types_1["default"].object.isRequired
};
