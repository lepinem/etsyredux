// user_detail.js


//React imports
import React, { Component } from 'react'

//our connect function
import { connect } from 'react-redux'

class UserDetail extends Component {
  // we can add a conditional statement to make sure that if a user has not been selected,
  // we don't receive an error message or have issues rendering this component.
  render() {
    if(!this.props.user) {
      return (
        <div>Select a user to see their details!</div>
      )
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.user.name}</div>
        <div>{this.props.user.bio}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  }
}

export default connect(mapStateToProps)(UserDetail)
