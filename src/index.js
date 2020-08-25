import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Disp extends React.Component{

componentDidMount() {
	axios.get('http://localhost:8080/')
	.then(response => {
	  console.log(response.data);
	})
	.catch(error => {
	  console.log(error);
	});
  }
	render(){
		return(
			<p> Hello </p>
		);
	}
  }

  
  firebase.initializeApp({
	apiKey: "AIzaSyAeHl1Oi2IjVRVOq66fmNRKOGiq46yg66s",
	authDomain: "sheetmanipulation.firebaseapp.com"
  })
  
  class App extends React.Component {
	state = { isSignedIn: false, email: '000' }
	uiConfig = {
	  signInFlow: "popup",
	  signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	  ],
	  callbacks: {
		signInSuccess: () => false
	  }
	}
  
	componentDidMount = () => {
	  firebase.auth().onAuthStateChanged(user => {
		this.setState({ isSignedIn: !!user })
		if(this.state.isSignedIn == true){
			this.setState({email: firebase.auth().currentUser.email})
		}
		console.log("user", user, "Email", firebase.auth().currentUser.email)
	  })
	}
  
	render() {
	  return (
		<div className="App">
		  {this.state.isSignedIn ? (
			<span>
			  <div>Signed In!</div>
			  <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
			  <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
			  <img
				alt="profile picture"
				src={firebase.auth().currentUser.photoURL}
			  />
			</span>
		  ) : (
			<StyledFirebaseAuth
			  uiConfig={this.uiConfig}
			  firebaseAuth={firebase.auth()}
			/>
		  )}
		</div>
	  )
	}
  }
  
// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

