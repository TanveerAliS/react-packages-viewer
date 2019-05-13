import React, { PureComponent } from "react";

export default class Section extends PureComponent {
  toggle = (e) => {
    this.props.handleClick(e, this.props.index);
  };

  render() {
    const {title, selected, children, isDisabled} = this.props;
    return (
      <div className={`Accordion__section ${selected ? "Accordion__section--selected" : ""}`}>
        <div className={`Accordion__toggle ${isDisabled && 'Accordion__disable' }`} onClick={this.toggle}>
          {title}
        </div>

        {selected && (
          <div className="Accordion__content">
            <div className="Accordion__inner">{children}</div>
          </div>
        )}
      </div>
    );
  }
}
