import React from 'react';

export default functionalPropSelector => Component =>
  class extends React.Component {
    /**
     * If the device is already in fullscreen mode, this
     * button can be used to exit fullscreen (long press)
     */
    handleClick = e => {
      // Item is already fullscreen
      // We should try to exit now
      // NOTE: Second parameter is number of times tapped
      functionalPropSelector(this.props)(e.detail);
    };

    render() {
      return (
        <div role="button" onClick={this.handleClick}>
          <Component {...this.props} />
        </div>
      );
    }
  };
