// import React, { Component } from "react";
// import RouterHelper from "router/roter.helper";
// import "App.css";
// import { clearMessage } from "actions/message";
// import {history} from "router/history"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <RouterHelper />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import RouterHelper from "router/roter.helper";
// import "App.css";
// import { connect } from "react-redux";
// import { clearMessage } from "actions/message";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: undefined,
//     };
//   }
//   componentDidMount() {
//     const user = this.props.user;

//     if (user) {
//       this.setState({
//         currentUser: user,
//         showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <RouterHelper />
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { user } = state.auth;
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(App);

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

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { history } from "helpers/history";
// import eventBus, { EventBus } from "components/common/EventBus";
// import { clearMessage } from "actions/message";
// import { Router, Switch, Route, Link } from "react-router-dom";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showWatcherPanel: false,
//       showAdminPanel: false,
//       currentUser: undefined,
//     };
//     history.listen((location) => {
//       props.dispatch(clearMessage());
//     });
//   }

//   componentDidMount() {
//     const user = this.props.user;
//     if (user) {
//       this.setState({
//         currentUser: user,
//         showWatcherPanel: user.roles.includes("ROLE_WATCHER"),
//         showAdminPanel: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
//     EventBus.on("logout", () => {
//       this.logOut();
//     });
//   }

//   componentWillUnmount() {
//     eventBus.remove("logout");
//   }

//   logOut() {
//     // eslint-disable-next-line no-undef
//     this.props.dispatch(logout());
//     this.setState({
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     });
//   }

//   render() {
//     const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
//     return <Router history={history}>

//     </Router>;
//   }
// }

// function mapStateToProps(state) {
//   const { user } = state.auth;
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(App);
