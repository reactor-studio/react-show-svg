import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Renderer from 'react-test-renderer';

// Component
import App from '../src/App/App';

// Config
configure({ adapter: new Adapter() });

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
