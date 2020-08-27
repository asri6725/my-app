import React from 'react';
import axios from 'axios';

class Allscores extends React.Component{
    componentDidMount() {
        axios.get('http://18.222.1.20:8080/all-scores/')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
    render(){
		return(
			<p> These are all the scores available. </p>
		);
	}
  }


export default Allscores;