import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';

// Component
import App from '../src';

// Assets
const icon = '<svg version="1.1"><text font-family="Verdana"/></svg>';
const parsedIcon = '<svg version="1.1"><text fontFamily="Verdana"/></svg>';

describe('App Component', () => {
  const wrapper = shallow(
    <App
      id="test-id"
      onClick={() => console.log('Good')}
      className="test-class"
      icon={icon}
    />
  );

  it('should parse svg', () => {
    wrapper.instance().parseSvg(icon).then(parsed => {
      expect(parsed).toEqual(parsedIcon);
    });
  });

  it('should create wrapper around svg', () => {
    const wrapped = shallow(wrapper.instance().renderIcon(parsedIcon));

    expect(wrapped).toMatchSnapshot();
  });
});
