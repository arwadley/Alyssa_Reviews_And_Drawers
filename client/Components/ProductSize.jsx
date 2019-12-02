import React from 'react'; 

export default class ProductSize extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            rotated: false
        }
        this.clickHandler = this.clickHandler.bind(this); 
    }

    clickHandler(){
      let currentRotation = this.state.rotated; 
      this.setState({
        rotated: !currentRotation
      }); 
    }

    render() {
      return (          
        <div onClick={this.clickHandler} className='aw_container_horizontal'>
            <span className={'aw_x_icon ' + (this.state.rotated ? 'rotate' : 'rotate_original')}>+</span>
            <span className='aw_drawer_label_styling  aw_drawer_label_text'>Product size</span>
        </div> 
      )
    }
}