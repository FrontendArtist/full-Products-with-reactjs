import React from 'react'




function profile(props) {
  const user = JSON.parse(localStorage.getItem(props.match.params.user))

  const {name , email} = user;
  return (
    <div>
        <h1>
          hello welcome {name}
          </h1>
          <h2>
          this is your profile
          </h2>
    </div>
  )
}

export default profile