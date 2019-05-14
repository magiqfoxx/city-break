import React from "react";

class Loading extends React.PureComponent {
  state = {};
  render() {
    return (
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default Loading;
