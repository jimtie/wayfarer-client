import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import PostShow from '../components/PostShow'
import ProfileContainer from '../containers/ProfileContainer'
import PostsContainer from '../containers/PostsContainer'
import CitiesContainer from '../containers/CitiesContainer'

export default (props) => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route path="/profile">
      <ProfileContainer
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />
    </Route>
    <Route exact path="/posts" component={ PostsContainer }/>
    <Route path="/posts/:id" component={ PostShow }/>
<<<<<<< Updated upstream
    <Route exact path="/cities" component={CitiesContainer}/>
=======
    <Route path="/cities/:id?" component={ CitiesContainer }/>
>>>>>>> Stashed changes
  </Switch>
);
