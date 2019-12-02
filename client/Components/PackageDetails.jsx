import React from 'react'; 

export default class PackageDetails extends React.Component{
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
        <div onClick={this.clickHandler}className='aw_container_horizontal'>
          <div className={'aw_x_icon ' + (this.state.rotated ? 'rotate' : 'rotate_original')}>+</div>
          <span className='aw_drawer_label_styling  aw_drawer_label_text'>Package details</span>
        </div>
      )
    }
}