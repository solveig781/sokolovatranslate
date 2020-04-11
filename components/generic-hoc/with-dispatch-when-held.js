import React from 'react';

export default (
  functionalPropSelector,
  { holdTime = 5000 } = {},
) => Component =>
  class extends React.Component {
    /**
     * If the device is already in fullscreen mode, this
     * button can be used to exit fullscreen (long press)
     */
    handleMouseUp() {
      // Only activates if the user has held down the button
      // for more than n seconds (from props, defaults to 5s)
      const startTime = this.startTime || Date.now();
      if (Date.now() - startTime < holdTime) {
        this.startTime = null;
        return;
      }

      // Item is already fullscreen
      // We should try to exit now
      functionalPropSelector(this.props)(this.props);
    }

    handleMouseDown() {
      // Asignment is done, as setState will break the click even
      this.startTime = Date;
    }

    render() {
      return (
        <div
          role="button"
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        >
          <Component {...this.props} />
        </div>
      );
    }
  };
