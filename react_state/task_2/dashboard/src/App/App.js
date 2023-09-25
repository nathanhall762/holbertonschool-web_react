import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../Utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      isLoggedIn: false,
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: this.logOut,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
    console.log("Display drawer");
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
    console.log("Hide drawer");
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { listCourses, listNotifications, displayDrawer, user } = this.state;

    return (
      <AppContext.Provider value={this.state}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.container)}>
          <div className={css(styles.app)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {!user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} /> {/* Passing logIn function */}
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit
              ducimus aut reiciendis ex asperiores numquam voluptas? Voluptate
              odio, officia minima rem placeat itaque, earum in architecto fuga
              error ex.
            </p>
          </BodySection>
          <div>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const cssVars = {
  mainColor: "#e0354b",
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  container: {
    width: "calc(100% - 16px)",
    marginLeft: "8px",
    marginRight: "8px",
  },

  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  appBody: {
    display: "flex",
  },
});

export default App;
