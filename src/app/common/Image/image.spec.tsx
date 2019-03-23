import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Image from './image';
import renderer from 'react-test-renderer';

describe('common Image', () => {
  let ImageComponent: ShallowWrapper;

  beforeEach(() => {
    ImageComponent = shallow(<Image src="imageUrl" />);
  });

  it('Image render with with src equal prop: imageUrl', () => {
    expect(ImageComponent.prop('src')).toEqual('imageUrl');
  });

  it('Image render with with default alt : Image', () => {
    expect(ImageComponent.prop('alt')).toEqual('Image');
  });

  it('Image render with with given alt prop: Logo', () => {
    ImageComponent.setProps({ alt: 'Logo' });
    expect(ImageComponent.prop('alt')).toEqual('Logo');
  });

  it('Image renders correctly', () => {
    const tree = renderer.create(<Image src="xd" alt="alert" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
