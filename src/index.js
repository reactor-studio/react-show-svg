import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svgtojsx from 'svg-to-jsx';

class ReactShowSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsx: null,
    };
  }

  componentDidMount() {
    this.svgToJsx(this.props.icon);
  }

  svgToJsx = (raw) => {
    return this.parseSvg(raw).then((jsx) => {
      this.renderIcon(jsx);
    });
  }

  parseSvg = (raw) => {
    const { size } = this.props;

    return svgtojsx(raw, {
      props: {
        width: size,
        height: size
      },
    }).then(jsx => jsx);
  }

  renderIcon = (jsx) => {
    this.setState({ jsx });
  }

  render() {
    const { jsx } = this.state;
    const {
      id,
      ref,
      className,
      onClick
    } = this.props;

    const icon = jsx
      ? (
        <div
          id={id}
          ref={ref}
          onClick={onClick}
          className={className}
          dangerouslySetInnerHTML={{ __html: jsx }}
        />
      )
      : null;

    return icon;
  }
}

ReactShowSvg.defaultProps = {
  size: '20px',
};

ReactShowSvg.propTypes = {
  icon: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  ref: PropTypes.func
};

export default ReactShowSvg;
