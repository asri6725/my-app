(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2ZS2jUUBSGv2rLiE+Ejh0tLnyAICqCm4puRKW404UgCLqyIiLduhAUV0WsFe1OcCFIoYKIr6WK4MLHxtoqFNSFb/BZ8YWtcXFOuDOTyeTmZiapMh+ETpJ7T/6fc3KSm0KDBg3+F2YD3cAocCtbKW4sA04DY4Cn25NMFcWgCdgEDALjGAP+1p2dNDtmAV3ACEHx/jYGzMlKYBRLgB7gI0bwK6AfeEmpkVMZaQylCegErgETGKE3gK1AARjSYy/07x/knpkUzETKZxgj/idwDlilY/IYE4+B4/r7etpiK7EYKZ8PGAOvgSNAa9G4chPtwDPd35Ke3CDrCXafB8AuoLlsbLmJArBN90eBKelINkxDhD6itHwGgY6QOZVMANzUYwfqqDdApfJ5g5RPvsq8MBMrkBt8DHmy1x2/fH4TLJ+WiLlhJgDO6PGTNdZbgl8+vggP+IUYWmsZo5qJucA36thyFyCl8h5j4C1SUu0x4lQzAXBQz11NJjdIWPl0IdmJQ5SJqcBzPd/pLtmQQ8rnIcHyWecYM8oEwHZq1HIrlc87pHwWJohrYwLgto7Zn+Ba9FP68LqPZCWXJCilJoYIb8erdcxn5G3YGf91wENKanmSYIqtCYCzOq4v6UULGuS7BpwABnA3FMdEHvih11zqeL2KQXuQXu4buoKkPk4Mm3vC55COvRxXrK0YF0NxTTRj1h2bE+iNJI6huCYAdhSNb6qB3kiiDLmYALijc/bVUqwNbUAvpYYGsL+xi1mjcz4hK8hMaEUenl8wbTtOJkCWuR6ypM2cecAFRNBAjHltyKJrAlnPTApaga+IqJWWcw4j5i/VS5Qr/hcPm6y0YL5bbaynKBfakAZgk5WdiIkRUmq5cenFLit3ddzeuityxCYrHZiWOyMlXU5EZeW8nj+WmiJHqmVlPrLSHAcWpazLiRNUzspRPX4xdUWOFAhmJYd8dfGADRnpcqI8K7t1f5hJ2nLDKM/KPcTInixFudKH+QbgId+Gp2eqyBE/K/7bcU+2cpLhZ+WfablhFICnyP/MGzRokDJ/AWpLKcudYkQiAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(5),i=a(3),c=a(1),r=a(4),o=a(6),l=a(0),h=a.n(l),u=a(8),d=a.n(u),m=(a(15),a(9)),p=a.n(m);a(16);var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).sendToParent=a.sendToParent.bind(Object(c.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"sendToParent",value:function(e){this.props.actionData(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.onRequestClose,n=t.onCancel,s=t.cancelText,i=t.menus,c=t.show;return h.a.createElement("div",{className:"react-actionsheet".concat(c?" react-actionsheet-show":""),onClick:a},h.a.createElement("div",{className:"react-actionsheet-mask"}),h.a.createElement("div",{className:"react-actionsheet-wrap"},h.a.createElement("div",{className:"react-actionsheet-menu"},i.map((function(t,a){var n=t.content;return h.a.createElement("div",{key:a,className:"react-actionsheet-menu-item",onClick:function(){e.sendToParent(n)}},n)}))),h.a.createElement("div",{className:"react-actionsheet-action"},h.a.createElement("div",{className:"react-actionsheet-action-item",onClick:function(){return n}},s))))}}]),t}(h.a.Component);v.defaultProps={onRequestClose:function(){},onCancel:function(){var e=this.state.show;this.setState({show:!e})},cancelText:"Cancel",show:!1,menus:[]};var A=v,g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).onClick=function(){var e=a.state.show;a.setState({show:!e})},a.onRequestClose=function(){a.onClick()},a.state={show:!1},a.appData=a.appData.bind(Object(c.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"appData",value:function(e){this.props.sendData(e+" "+this.props.tip+", \n")}},{key:"render",value:function(){var e;return e=this.state.show?h.a.createElement(A,{actionData:this.appData,show:this.state.show,menus:this.props.menus,onRequestClose:this.onRequestClose}):h.a.createElement("a",null),h.a.createElement("div",{className:"items"},h.a.createElement("div",{className:"item",onClick:this.onClick},this.props.tip),e)}}]),t}(h.a.Component),f={apiKey:"AIzaSyAeHl1Oi2IjVRVOq66fmNRKOGiq46yg66s",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1EWPjrXH7BGoqE_sKH2Jn-Av5Kgf4nB5JRtZEgj4e8f4"},y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).initClient=function(){window.gapi.client.init({apiKey:f.apiKey,discoveryDocs:f.discoveryDocs}).then((function(){a.load()}))},a.state={menus:[{content:"some"},{content:"1"},{content:"2"},{content:"3"},{content:"a lot of"}],string:"sms:?&body=Hey dan! </br>I want \n",display:"Hey dan! \r\nI want\r\n",array:[],result:!1,error:null,length:0,width:0,transposed:[]},a.getData=a.getData.bind(Object(c.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"getData",value:function(e){var t=this.state.display;this.setState({display:t+e});var a=this.state.string;this.setState({string:a+e})}},{key:"componentWillMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"load",value:function(){var e=this;window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:f.spreadsheetId,range:"Sheet1"}).then((function(t){e.setState({array:t.result.values,result:!0}),e.setState({length:e.state.array.length,width:e.state.array[0].length}),e.transpose()}),(function(t){e.setState({result:!1,error:t.result.error})}))}))}},{key:"transpose",value:function(){for(var e=this.state.array,t=this.state.length,a=this.state.width,n=[],s=0;s<a;s++)n.push([]);for(s=0;s<t;s++)for(var i=0;i<a;i++)n[i].push(e[s][i]);this.setState({transposed:n})}},{key:"render",value:function(){if(1==this.state.result){for(var e=[],t=0;t<this.state.transposed.length;t++)for(var a=0;a<this.state.transposed[0].length;a++)0==a?e.push(h.a.createElement("div",{className:"heading",key:t+a},h.a.createElement("h3",null,this.state.transposed[t][a]))):"null"!=this.state.transposed[t][a]&&(a==this.state.transposed[0].length-1?e.push(h.a.createElement("div",{className:"lastValue"},h.a.createElement(g,{tip:this.state.transposed[t][a],menus:this.state.menus,sendData:this.getData}))):e.push(h.a.createElement("div",{className:"value"},h.a.createElement(g,{tip:this.state.transposed[t][a],menus:this.state.menus,sendData:this.getData}))));return h.a.createElement("div",{className:"Wrapper"},h.a.createElement("div",{className:"menu"},e),h.a.createElement("div",{className:"submit"},h.a.createElement("div",{className:"send"},h.a.createElement("a",{href:this.state.string},h.a.createElement("img",{className:"send",src:p.a}))),h.a.createElement("div",{className:"String"},h.a.createElement("a",null," ",this.state.display," "))))}return h.a.createElement("div",null," Recieving sheet Data :) ")}}]),t}(h.a.Component);d.a.render(h.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.46c72ac8.chunk.js.map