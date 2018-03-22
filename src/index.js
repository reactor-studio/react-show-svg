import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svgtojsx from 'svg-to-jsx';

class ReactShowSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: null
    };
  }

  componentDidMount() {
    const { icon } = this.props;

    // check if icon exists
    icon && this.svgToJsx(icon);
  }

  svgToJsx = (raw) => {
    // parse then render & save icon
    return this.parseSvg(raw).then((jsx) => {
      const icon = this.renderIcon(jsx);
      
      this.setState({ icon });
    });
  }

  parseSvg = (raw) => {
    const { size, width, height, fill } = this.props;
    const options = {
      props: {
        width: size || width,
        height: size || height,
        fill
      }
    };

    // parse svg to jsx
    return svgtojsx(raw, options).then(jsx => jsx).catch(error => {
      console.log('Error parsing icon: ', error);
    });
  }

  renderIcon(jsx) {
    const {
      id,
      ref,
      className,
      onClick
    } = this.props;

    // wrap svg icon inside div & set props
    const icon = (
      <div
        id={id}
        ref={ref}
        onClick={onClick}
        className={className}
        dangerouslySetInnerHTML={{ __html: jsx }}
      />
    );

    return icon;
  }

  render() {
    const { icon } = this.state;

    // return icon when ready
    return icon ? icon : null;
  }
}

ReactShowSvg.defaultProps = {
  width: '20px',
  height: '20px',
  fill: 'black'
};

ReactShowSvg.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  ref: PropTypes.func
};

export default ReactShowSvg;
