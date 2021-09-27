import React from "react";
import RouterHelper from "router/roter.helper";
import "App.css";
import LsCard from "components/common/LsCard/LsCard";
import { I18nProvider, LOCALES } from "i18n";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";

const theme = createTheme({
  direction: "rtl",
});

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <LsCard>
        <I18nProvider
          locale={
            props.selectedLang === "HE" ? LOCALES.HEBREW : LOCALES.ENGLISH
          }
        >
          <div
            dir={props.selectedLang === "EN" ? "ltr" : "rtl"}
            className="App"
          >
            <RouterHelper />
          </div>
        </I18nProvider>
      </LsCard>
    </ThemeProvider>
  );
};

function mapStateToProps(state) {
  const { selectedLang } = state.localizationReducer;
  return {
    selectedLang,
  };
}

export default connect(mapStateToProps)(App);
