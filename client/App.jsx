import React from 'react'; 
import ProductDescription from './Components/ProductDescription.jsx'; 
import ProductSize from './Components/ProductSize.jsx'; 
import CareInstructions from './Components/CareInstructions.jsx'; 
import EnvironmentAndMaterials from './Components/EnvironmentAndMaterials.jsx'; 
import PackageDetails from './Components/PackageDetails.jsx'; 
import AssemblyAndDocuments from './Components/AssemblyAndDocuments.jsx'; 
import Reviews from './Components/Reviews.jsx'; 
import ProductAvailability from './Components/ProductAvailability.jsx'; 


export default class App extends React.Component{
    constructor(props){
        super(props) 
    }

    render(){
        return(
        <div>
          <ProductDescription/> 
          <ProductSize/>
          <CareInstructions/>
          <EnvironmentAndMaterials/>
          <PackageDetails/>
          <AssemblyAndDocuments/>
          <Reviews/>
          <ProductAvailability/>
        </div>     
        )
    }
}

