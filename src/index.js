import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


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

// ========================================

ReactDOM.render(
  <Disp />,
  document.getElementById('root')
);

