import React from "react";
import RouterHelper from "router/roter.helper";
import "App.css";
import LsCard from "components/common/LsCard/LsCard";
import { I18nProvider, LOCALES } from "i18n";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import rtl from "jss-rtl";

import { connect } from "react-redux";

const rtlTheme = createTheme({
  direction: "rtl",
});
const ltrTheme = createTheme({
  direction: "ltl",
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = (props) => {
  const { isHe } = props;
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isHe ? "rtl" : "ltr");
  }, [isHe]);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={isHe ? rtlTheme : ltrTheme}>
        <CssBaseline />
        <LsCard>
          <I18nProvider locale={isHe ? LOCALES.HEBREW : LOCALES.ENGLISH}>
            <div dir={isHe ? "rtl" : "ltr"} className="App">
              <RouterHelper />
            </div>
          </I18nProvider>
        </LsCard>
      </ThemeProvider>
    </StylesProvider>
  );
};

function mapStateToProps(state) {
  const { isHe } = state.localizationReducer;
  return {
    isHe,
  };
}

export default connect(mapStateToProps)(App);
