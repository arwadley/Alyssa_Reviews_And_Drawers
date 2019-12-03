import React from 'react';
import ProductDescription from './Components/ProductDescription.jsx';
import ProductSize from './Components/ProductSize.jsx';
import CareInstructions from './Components/CareInstructions.jsx';
import EnvironmentAndMaterials from './Components/EnvironmentAndMaterials.jsx';
import PackageDetails from './Components/PackageDetails.jsx';
import AssemblyAndDocuments from './Components/AssemblyAndDocuments.jsx';
import Reviews from './Components/Reviews.jsx';
import ProductAvailability from './Components/ProductAvailability.jsx';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: {}
    };

    this.getCurrentItem = this.getCurrentItem.bind(this);
  }

  componentDidMount() {
    this.getCurrentItem(80);
  }

  getCurrentItem(currentId) {
    axios
      .get('/item', {
        params: { itemId: currentId }
      })
      .then(data => {
        console.log(data.data[0]);
        this.setState({
          currentItem: data.data[0]
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      id,
      box_number,
      product_description,
      product_size,
      care_instructions,
      environment_and_materials,
      package_details
    } = this.state.currentItem;
    return (
      <div>
        <ProductDescription id={id} boxNumber={box_number} description={product_description} />
        <ProductSize id={id} sizeData={product_size} />
        <CareInstructions id={id} instructions={care_instructions} />
        <EnvironmentAndMaterials id={id} environmentAndMaterials={environment_and_materials} />
        <PackageDetails id={id} packageDetails={package_details} />
        <AssemblyAndDocuments />
        <Reviews />
        <ProductAvailability />
      </div>
    );
  }
}
