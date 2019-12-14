import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import App from '../client/App.jsx';
import { isTSAnyKeyword } from '@babel/types';
import ProductDescription from '../client/Components/ProductDescription/ProductDescriptionComponent.jsx';
import expectExport from 'expect';

jest.mock('axios');

describe('App Component', () => {
  describe('when provided with a item object', () => {
    it('passes id, boxNumber, and Description to Product Description', () => {
      const item = {
        id: 22,
        box_number: '392.414.28',
        product_description: 'Ample storage space is hidden neatly under the bed.'
      };
      const appInstance = shallow(<App />);
      const productDescription = appInstance.find('ProductDescription');
      const productDescriptionProps = productDescription.props();
      const matchingProps = item.find(item => item.id === productDescriptionProps.id);
      expectExport(productDescriptionProps.box_number).toBe(matchingProps.box_number);
    });
  });
});

// describe('AppComponet', () => {
//   describe('when rendered', () => {
//     const getSpy = jest.spyOn(axios, 'get');
//     const AppInstance = shallow(<App />);
//     expect(getSpy).toBeCalled();
//   });
// });
