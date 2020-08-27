import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Application from './Application';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Allscores from './Allscores';

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
		if(this.state.isSignedIn === true){
			this.setState({email: firebase.auth().currentUser.email})
		}
		if(this.state.isSignedIn === false){
			this.setState({email: "00000"})
		}
		console.log("user", user, "Email", firebase.auth().currentUser.email)
	  })
	}
  
	render() {
	  return (
		<div className="App">
		  {this.state.isSignedIn ? (
			<div>
			<span>
				<div>
					<Link to="/scores">Scores</Link> <Link to="/">Home</Link>
			  		<button onClick={() => firebase.auth().signOut()}>Sign out</button>
			  	</div>
				
				<p>Welcome {firebase.auth().currentUser.displayName}! Why don't you play a classic?</p>
			  
			  	<Switch>
        			<Route component={Allscores} path="/scores" exact/>
					<Route  path = "/" render={(props) => <Application name = {firebase.auth().currentUser.displayName} mail = {firebase.auth().currentUser.email} />}/> 
					{//component = {Application}
	}
      			</Switch>
			
			</span>
			
			</div>
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
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
  );
  
  