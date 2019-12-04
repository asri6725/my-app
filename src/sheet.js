
import './sheet.css'

import React from 'react'


function close(){

}
function cancel(){
    const { show } = this.state
    this.setState({show: !show})
}

class Actionsheet extends React.Component {
    
    constructor(props){
        super(props);
        this.sendToParent = this.sendToParent.bind(this);
    }
  static defaultProps = {
    onRequestClose: close,
    onCancel: cancel,
    cancelText: 'Cancel',
    show: false,
    menus: []
  }
  sendToParent(value){
      this.props.actionData(value);
  }
  render() {
    const {
      onRequestClose,
      onCancel,
      cancelText,
      menus,
      show,
    } = this.props

    return (
      <div className={`react-actionsheet${show ? ' react-actionsheet-show' : ''}`}
        onClick={onRequestClose}>
        <div className='react-actionsheet-mask'>
        </div>
        <div className='react-actionsheet-wrap'>
          <div className='react-actionsheet-menu'>
            {
              menus.map((menu, i) => {
                const { content } = menu
                return (
                  <div key={i} className='react-actionsheet-menu-item' onClick={() => {this.sendToParent(content)}}>
                    {content}
                  </div>
                )
              })
            }
          </div>
          <div className='react-actionsheet-action'>
            <div className='react-actionsheet-action-item' onClick={ () => onCancel}>
              {cancelText}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// compiled bundle ignores "export default" values and exports empty object!!
// export default Actionsheet
export default Actionsheet
