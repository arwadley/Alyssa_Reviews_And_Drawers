import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import App from '../client/App.jsx';

jest.mock('axios');

let item = {
  id: 22,
  box_number: '392.414.28',
  product_description:
    'Ample storage space is hidden neatly under the bed in 6 large drawers. Perfect for storing quilts, pillows and bed linen',
  product_size:
    'Height of drawer (inside): 6 1/4" Length: 79 1/2" Width:  107 7/8" Height:, 11 3/4 "',
  care_instructions:
    'Bed frame with storage/headboard↵Wipe clean using a damp cloth and a mild cleaner.↵Wipe dry with a clean cloth.',
  environment_and_materials:
    'Environment \nBed frame with storage/headboard: \nAt least 80% (weight) of this product is made of wood',
  package_details:
    'Packages: 7\n\nNORDLI↵bed frame with storage\n\nThis product has multiple packages.\n\nNORDLI↵headboard↵This product has multiple packages.'
};

test('should retrieve items', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper);
  let resp = { data: item };

  axios.get().mockResolvedValue(resp);
  wrapper.instance().componentDidMount();
  expect(wrapper.state('currentItem').id).toEqual(resp.data.id);
});

// describe('App Component', () => {
//   describe('when provided with a item object', () => {
//     it('passes id, boxNumber, and Description to Product Description', () => {
//       const item = {
//         id: 22,
//         box_number: '392.414.28',
//         product_description: 'Ample storage space is hidden neatly under the bed.'
//       };
//       const appInstance = shallow(<App />);
//       const productDescription = appInstance.find('ProductDescription');
//       const productDescriptionProps = productDescription.props();
//       const matchingProps = item.find(item => item.id === productDescriptionProps.id);
//       expectExport(productDescriptionProps.box_number).toBe(matchingProps.box_number);
//     });
//   });
// });

// describe('AppComponet', () => {
//   describe('when rendered', () => {
//     const getSpy = jest.spyOn(axios, 'get');
//     const AppInstance = shallow(<App />);
//     expect(getSpy).toBeCalled();
//   });
// });
