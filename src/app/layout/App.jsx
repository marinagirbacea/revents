import React, { Component, Fragment } from "react";

import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Route exact path='/' component={HomePage} />
          <Route
            path='/(.+)'
            render={() => (
              <Fragment>
                <NavBar />
                <Container className='main'>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Container>
              </Fragment>
            )}
          />
        </Fragment>
      </div>
    );
  }
}

export default App;
