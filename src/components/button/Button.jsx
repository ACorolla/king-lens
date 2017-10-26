import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.bool,
    disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),
    size: PropTypes.string,
    onClick: PropTypes.func,
    isSubmit: PropTypes.bool,
  }

  static defaultProps = {
    type: 'primary',
    style: {},
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (_.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { children, className, loading, size, type, isSubmit, style } = this.props;
    const buttonType = isSubmit ? 'submit' : 'button';
    let isDisabled = this.props.disabled;
    if (_.isFunction(isDisabled)) {
      isDisabled = isDisabled();
    }
    return (
      <button
        className={classNames('button',
          { 'is-loading': loading, [className]: className, [`is-${size}`]: size, [`is-${type}`]: type })}
        disabled={isDisabled}
        onClick={this.handleClick}
        type={buttonType}
        style={style}
      >
        {children}
      </button>
    );
  }
}

export default Button;
