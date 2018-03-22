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
    this.svgToJsx(this.props.icon);
  }

  svgToJsx = (raw) => {
    return this.parseSvg(raw).then((jsx) => {
      const icon = this.renderIcon(jsx);

      this.setState({ icon });
    });
  }

  parseSvg = (raw) => {
    const { size, width, height, fill } = this.props;
    const defaultSize = size || '20px';
    const defaultFill = 'black';

    return svgtojsx(raw, {
      props: {
        width: width || defaultSize,
        height: height || defaultSize,
        fill: fill || defaultFill
      }
    }).then(jsx => jsx);
  }

  renderIcon(jsx) {
    const {
      id,
      ref,
      className,
      onClick
    } = this.props;

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

    return icon ? icon : null;
  }
}

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
