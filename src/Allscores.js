import React from 'react';
import axios from 'axios';

class Allscores extends React.Component{
  constructor(props){
		super(props);
		this.state = {
      scores : []
    }
	}
    componentDidMount() {
        axios.get('http://localhost:8080/all-scores/')
        .then(response => {
          console.log(response.data);
          const res = response.data;
          this.setState({scores: res})
        })
        .catch(error => {
          console.log(error);
        });
      }
    render(){
		return(
			<div>
      <p> These are all the scores available. </p>
      <div> <p> Name followed by score. </p></div>
      <div> 
        {
          this.state.scores.map((users, index) => {
            return(
              <div>  {users.name} {users.score}  </div>
            )
          })
        }
        </div>
      </div>
		);
	}
  }


export default Allscores;