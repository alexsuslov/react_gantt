import React, { PropTypes } from 'react';
import keydown, { Keys } from 'react-keydown';

import Gantt from './gantt';
import s from '../css/style.css';

class Right extends React.Component {
  constructor(props) {
    super(props);
    ['Plus', 'Minus', 'Wheel'].forEach(v => {
      this[`handle${v}`] = this[`handle${v}`].bind(this);
    });
  }
  @keydown('=')
  handlePlus(e) { this.props.setZoom(0); }
  @keydown('-')
  handleMinus(e) { this.props.setZoom(1); }
  handleWheel(e) { this.props.setZoom(!(e.deltaY > 0)); }

  render() {
    return (<div className={s.right}
      onWheel={this.handleWheel}
    >
      <Gantt {...this.props} />
    </div>);
  }
};

export default Right;
