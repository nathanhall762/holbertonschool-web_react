import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../Utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import WithLogging from "../HOC/WithLogging";
import {StyleSheet, css} from 'aphrodite';

const LoggedCourseList = WithLogging(CourseList);
const LoggedLogin = WithLogging(Login);
const LoggedNotifications = WithLogging(Notifications);
const LoggedHeader = WithLogging(Header);
const LoggedFooter = WithLogging(Footer);
const LoggedBodySection = WithLogging(BodySection);
const LoggedBodySectionWithMarginBottom = WithLogging(
  BodySectionWithMarginBottom
);
const styles = StyleSheet.create({
  
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;

    return (
      <>
        <LoggedNotifications listNotifications={listNotifications} />
        <LoggedHeader />
        <LoggedBodySectionWithMarginBottom title="Course list">
          {isLoggedIn ? <LoggedCourseList listCourses={listCourses} /> : null}
        </LoggedBodySectionWithMarginBottom>
        <LoggedBodySectionWithMarginBottom title="Log in to continue">
          {!isLoggedIn ? <LoggedLogin /> : null}
        </LoggedBodySectionWithMarginBottom>
        <LoggedBodySection title="News from the School">
          <p>Some random text about the latest news from the school.</p>
        </LoggedBodySection>
        <LoggedFooter />
      </>
    );
  }

  static defaultProps = {
    logOut: () => {},
  };

  static propTypes = {
    logOut: PropTypes.func,
  };
}

export default App;
