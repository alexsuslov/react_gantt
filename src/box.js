import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from '../css/gantt.css';

const debug = false
class Box extends React.Component {
  render() {
    const { props } = this;
    let {from, to } = props;
    const { cell, label, name, customClass, start, stop, k } = props;
    if (from > to){
      debug && console.error('Entery error: From > To!', label, name);
      [to, from] = [from, to];
    }
    const _from = (from < start) ? start : from;
    const _to = (to < stop) ? to: stop ;
    const style = {
      left: (_from - start) / k,
      width: (_to - _from) / k,
    };
    return (<div style={style} className={cx(s.entry,s[customClass])}>{label}</div>);
  }
};

export default Box;