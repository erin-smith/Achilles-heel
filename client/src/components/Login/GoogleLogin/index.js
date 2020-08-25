import React from 'react';

// const client_id = '15003138507-rrf8me4d9tdffufbu8l38mji2h372j2m.apps.googleusercontent.com';

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

function Login(props) {
  return (
    <div>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  )
}

export default Login