import React from 'react'; 
import ReactDOM from 'react-dom'; 

export default class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            <span>+</span>
            <span>Product description</span>
        </div>
        )
    }
}
