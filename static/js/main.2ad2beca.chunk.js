(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2ZS2jUUBSGv2rLiE+Ejh0tLnyAICqCm4puRKW404UgCLqyIiLduhAUV0WsFe1OcCFIoYKIr6WK4MLHxtoqFNSFb/BZ8YWtcXFOuDOTyeTmZiapMh+ETpJ7T/6fc3KSm0KDBg3+F2YD3cAocCtbKW4sA04DY4Cn25NMFcWgCdgEDALjGAP+1p2dNDtmAV3ACEHx/jYGzMlKYBRLgB7gI0bwK6AfeEmpkVMZaQylCegErgETGKE3gK1AARjSYy/07x/knpkUzETKZxgj/idwDlilY/IYE4+B4/r7etpiK7EYKZ8PGAOvgSNAa9G4chPtwDPd35Ke3CDrCXafB8AuoLlsbLmJArBN90eBKelINkxDhD6itHwGgY6QOZVMANzUYwfqqDdApfJ5g5RPvsq8MBMrkBt8DHmy1x2/fH4TLJ+WiLlhJgDO6PGTNdZbgl8+vggP+IUYWmsZo5qJucA36thyFyCl8h5j4C1SUu0x4lQzAXBQz11NJjdIWPl0IdmJQ5SJqcBzPd/pLtmQQ8rnIcHyWecYM8oEwHZq1HIrlc87pHwWJohrYwLgto7Zn+Ba9FP68LqPZCWXJCilJoYIb8erdcxn5G3YGf91wENKanmSYIqtCYCzOq4v6UULGuS7BpwABnA3FMdEHvih11zqeL2KQXuQXu4buoKkPk4Mm3vC55COvRxXrK0YF0NxTTRj1h2bE+iNJI6huCYAdhSNb6qB3kiiDLmYALijc/bVUqwNbUAvpYYGsL+xi1mjcz4hK8hMaEUenl8wbTtOJkCWuR6ypM2cecAFRNBAjHltyKJrAlnPTApaga+IqJWWcw4j5i/VS5Qr/hcPm6y0YL5bbaynKBfakAZgk5WdiIkRUmq5cenFLit3ddzeuityxCYrHZiWOyMlXU5EZeW8nj+WmiJHqmVlPrLSHAcWpazLiRNUzspRPX4xdUWOFAhmJYd8dfGADRnpcqI8K7t1f5hJ2nLDKM/KPcTInixFudKH+QbgId+Gp2eqyBE/K/7bcU+2cpLhZ+WfablhFICnyP/MGzRokDJ/AWpLKcudYkQiAAAAAElFTkSuQmCC"},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(3),c=t(5),i=t(4),l=t(1),r=t(6),o=t(0),m=t.n(o),u=t(8),p=t.n(u);t(15),t(16);var h=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).sendToParent=t.sendToParent.bind(Object(l.a)(t)),t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"sendToParent",value:function(e){this.props.actionData(e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.onRequestClose,n=a.onCancel,s=a.cancelText,c=a.menus,i=a.show;return m.a.createElement("div",{className:"react-actionsheet".concat(i?" react-actionsheet-show":""),onClick:t},m.a.createElement("div",{className:"react-actionsheet-mask"}),m.a.createElement("div",{className:"react-actionsheet-wrap"},m.a.createElement("div",{className:"react-actionsheet-menu"},c.map((function(a,t){var n=a.content;return m.a.createElement("div",{key:t,className:"react-actionsheet-menu-item",onClick:function(){e.sendToParent(n)}},n)}))),m.a.createElement("div",{className:"react-actionsheet-action"},m.a.createElement("div",{className:"react-actionsheet-action-item",onClick:function(){return n}},s))))}}]),a}(m.a.Component);h.defaultProps={onRequestClose:function(){},onCancel:function(){var e=this.state.show;this.setState({show:!e})},cancelText:"Cancel",show:!1,menus:[]};var d=h,g=t(9),v=t.n(g),E=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).onClick=function(){var e=t.state.show;t.setState({show:!e})},t.onRequestClose=function(){t.onClick()},t.onCancel=function(){},t.sheetClick=function(){},t.state={show:!1},t.appData=t.appData.bind(Object(l.a)(t)),t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"appData",value:function(e){this.props.sendData(e+" "+this.props.tip+", \n")}},{key:"render",value:function(){return m.a.createElement("div",{className:"items"},m.a.createElement("div",{className:"item",onClick:this.onClick},this.props.tip),m.a.createElement(d,{actionData:this.appData,show:this.state.show,menus:this.props.menus,onRequestClose:this.onRequestClose,onClick:this.sheetClick,onCancel:this.onCancel}))}}]),a}(m.a.Component),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).state={menus:[{content:"some"},{content:"1"},{content:"2"},{content:"3"},{content:"a lot of"}],string:"sms:&body=Hey dan! \nI want \n",display:"Hey dan! \r\nI want\r\n",meat:["bacon","chicken","chorizo","ham","pepperoni","proscuitto","salami","wings"],cheese:["blue","bocconchini","fetta","goat","mozarella","notzarella","parmesan","sour cream","swiss","whip cream"],veg:["basil","caram onion","cherry tom","corn","cucumber","eggplant","fennel","green cap","kale","mint","mushroom","parsley","portobello","potato","pumpkin","red cabbage","Roma tom","spanish onion","strawberry","zucchnini"],leaves:["mixed leaves","rocket","spinach"],frozen:["buff mozz","cauliflower","cheese sticks","chilli marinade","curry sauce","fajita","falafel","gluten free","lamb","maple","polenta","pork","prawns","relish","steak"],sauce:["3C","aioli","bal glaze","balsamic","bbq","cream sauce","dijon mustard","garlic","herb vin","hot sauce","mustard sauc","nutella","olive oil","peri","pesto","ranch","smoke","tapenade","truffle","wing glaze"],extra:["baking paper","bin bags","capers","chilli flakes","cling wrap","cream potts","dip container","dip lods","floor cleaner","flour","gloves lg","gloves md","grease proof pap","green deterg","green olives","jalapenos","M spice","nutmeg","olive oil","olives","oregano","paper towl","pickels","pine nuts","piza box xlg","pizza box lg","pizza box md","pizza box sm","roast cap","salad bowls","salt","semi dried tom","snack box","sponge","steel scourer","sugar","tom sauce","veg oil","walnuts","wipes"],drinks:["coke","coke zero","sprite","sunkist","lemonade","sparkling water"],icecream:["s caramel 500","hokey 500","choc 500","lamington 500","pavlova 500","s caramel 130","hokey 130","choc 130","lamington 130","pavlova 130"]},t.getData=t.getData.bind(Object(l.a)(t)),t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"getData",value:function(e){var a=this.state.display;this.setState({display:a+e});var t=this.state.string;this.setState({string:t+e})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"Wrapper"},m.a.createElement("div",{className:"menu"},m.a.createElement("div",{className:"meat"},m.a.createElement("h3",null," Meat ")),m.a.createElement("div",{className:"list1"},this.state.meat.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"cheese"},m.a.createElement("h3",null," Cheese ")),m.a.createElement("div",{className:"list2"},this.state.cheese.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"veg"},m.a.createElement("h3",null," Vegetables ")),m.a.createElement("div",{className:"list3"},this.state.veg.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"leaves"},m.a.createElement("h3",null," Leaves ")),m.a.createElement("div",{className:"list4"},this.state.leaves.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"frozen"},m.a.createElement("h3",null," Frozen Food ")),m.a.createElement("div",{className:"list5"},this.state.frozen.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"sauce"},m.a.createElement("h3",null," Sauces ")),m.a.createElement("div",{className:"list6"},this.state.sauce.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"extra"},m.a.createElement("h3",null," Extras ")),m.a.createElement("div",{className:"list7"},this.state.extra.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"drinks"},m.a.createElement("h3",null," Drinks ")),m.a.createElement("div",{className:"list8"},this.state.drinks.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})}))),m.a.createElement("div",{className:"icecream"},m.a.createElement("h3",null," Ice Creams ")," "),m.a.createElement("div",{className:"list9"},this.state.icecream.map((function(a,t){return m.a.createElement(E,{tip:a,menus:e.state.menus,sendData:e.getData})})))),m.a.createElement("div",{className:"submit"},m.a.createElement("div",{className:"send"},m.a.createElement("a",{href:this.state.string},m.a.createElement("img",{className:"send",src:v.a}))),m.a.createElement("div",{className:"String"},m.a.createElement("a",null," ",this.state.display," "))))}}]),a}(m.a.Component);p.a.render(m.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2ad2beca.chunk.js.map