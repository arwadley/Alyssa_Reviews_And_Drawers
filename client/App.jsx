import React from 'react';
import ProductDescription from './Components/ProductDescription/ProductDescriptionComponent.jsx';
import ProductSize from './Components/ProductSize/ProductSize.jsx';
import CareInstructions from './Components/CareInstructions/CareInstructions.jsx';
import EnvironmentAndMaterials from './Components/EnvironmentAndMaterials/EnvironmentAndMaterials.jsx';
import PackageDetails from './Components/PackageDetails/PackageDetails.jsx';
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
    this.formatSizeData = this.formatSizeData.bind(this);
  }

  componentDidMount() {
    this.getCurrentItem(35);
  }

  getCurrentItem(currentId) {
    axios
      .get('/item', {
        params: { itemId: currentId }
      })
      .then(result => {
        let data = result.data[0];
        data.product_size = this.formatSizeData(data.product_size);
        console.log(data.package_details);
        this.setState({
          currentItem: data
        });
      })
      .catch(error => console.log(error));
  }

  formatSizeData(data) {
    let formattedData = data;
    if (formattedData.includes('\n')) {
      formattedData = formattedData.split('\n');
    }
    let newData = [];
    for (let i = 0; i < formattedData.length; i++) {
      if (formattedData[i] !== '') {
        let current = formattedData[i].split(':');
        current[0] = current[0] + ':';
        newData.push(current);
      }
    }
    return newData;
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
