import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import send from './send.png';
import App from './menuItem'
import config from './config'

class Disp extends React.Component{
	
	getData(e){
		const display = this.state.display;
		this.setState({display: display+e});
		const string = this.state.string;
		this.setState({string: string+e});
	}
	componentWillMount() {
        // 1. Load the JavaScript client library.
        window.gapi.load("client", this.initClient);
    }

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
          .init({
            apiKey: config.apiKey,
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: config.discoveryDocs
          })
          .then(() => {
          // 3. Initialize and make the API request.
          this.load();
        });
      };

    load() {
        window.gapi.client.load("sheets", "v4", () => {
          window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.spreadsheetId,
              range: "Sheet1"
            })
            .then(
              response => {
				this.setState({array: response.result.values, result:true});
				this.setState({length: this.state.array.length, width: this.state.array[0].length});
                this.transpose();
              },
              response => {
                this.setState({ result:false, error: response.result.error});
              }
            );
        });
      }
	transpose(){
		const array = this.state.array, arraylength = this.state.length, width = this.state.width, newArray = [];
		for(var i = 0; i < width; i++){
		  newArray.push([]);
	  };
  
	  for(var i = 0; i < arraylength; i++){
		  for(var j = 0; j < width; j++){
			  newArray[j].push(array[i][j]);
		  };
	  };

	  this.setState({transposed: newArray})
	  }
	
	render(){
		if(this.state.result == true){
			const options = [];
		for(var i=0; i<this.state.transposed.length; i++){
			for(var j=0; j< this.state.transposed[0].length; j++){
				if(j==0){
					options.push(<div className="heading" key={i+j}><h3>{this.state.transposed[i][j]}</h3></div>)
				}
				else if(this.state.transposed[i][j]!="null"){
					options.push(<div className="value"><App tip = {this.state.transposed[i][j]} menus = {this.state.menus} sendData = {this.getData} /></div>)
				}
			}
			options.push(<div className="break">  </div>)
		}
		return(
			<div className = "Wrapper">
				<div className="menu">
					{options}
					
				</div>
				 <div className="submit">
					<div className = "send">
						<a href={this.state.string}>
							<img className = "send" src = {send} />
						</a>
					</div>
					<div className="String">
						<a> {this.state.display} </a>
					</div>
				</div> 
		</div>
		 )
		}
		return(
			<div> Recieving sheet Data :) </div>
		)

	  }

	  constructor(props){
		super(props);
		this.state = {
			menus: [{content: 'some'}, {content: '1'}, {content: '2'}, {content: '3'}, {content: "a lot of"}],
			string: "sms:?&body=Hey dan! </br>I want \n",
			display: "Hey dan! \r\nI want\r\n",
			array: [],	
            result: false,
			error: null,
			length: 0,
			width: 0,
			transposed: []
		}
		this.getData = this.getData.bind(this);
	}
  }

// ========================================

ReactDOM.render(
  <Disp />,
  document.getElementById('root')
);

