import React from 'react'; 


export default class App extends React.Component{
    constructor(props){
        super(props)

        this.clickHandler= this.clickHandler.bind(this); 
    }

    clickHandler(){

    }

    render(){
        return(
        <div>
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Product description</span>
          </div>
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Product size</span>
          </div> 
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Care instructions</span>
          </div> 
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Environment & materials</span>
          </div>
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Package details</span>
          </div>  
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Assembly & Documents</span>
          </div> 
          <div className='aw_container_horizontal'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text'>Reviews</span>
          </div> 
          <div id='aw_last_drawer'>
              <span className='aw_drawer_label_styling aw_x_icon '>+</span>
              <span className='aw_drawer_label_styling  aw_drawer_label_text' >Product availability</span>
          </div> 
        </div>     
        )
    }
}
