// user_list.js

//normal react imports
import React, { Component } from 'react'

//the glue that binds React to Redux so they can communicate
import { connect } from 'react-redux'

//our action creator to select a user
import { selectUser }  from '../actions'

// The props that UserList receives come from our state.
// the mapStateToProps function below does this for us.
class UserList extends Component {
  render() {
    let userNames = this.props.users.map((user) => {
      return (
        <li
          key={user.name}
          onClick={() => this.props.selectUser(user)}>{user.name}</li>
      )
    })
    return (
      <ul>
        {userNames}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //what is returned will show up as props inside of the UserList container
  //inside of this function we generally return an object
  return {
    users: state.users,
  }
}

function mapDispatchToProps(dispatch) {
  // whenever selectUser is called, the result should be passed to
  // the reducer.
    return {
      selectUser: user => {
        dispatch(selectUser(user))
      }
    }
}

// Promotes UserList from component to container.
// This connects our functions to our container component.
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
