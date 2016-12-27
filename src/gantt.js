import React, { PropTypes } from 'react';
import s from '../css/gantt.css';
import Row from './row';

const Gantt = props => {
  const { cell, start, stop, width } = props;
  const style = { width };
  return (<div className={s.gantt} style={style}>
    {props.data.map((v, key)=>(<Row {...{ ...props, ...v, key }} />))}
  </div>)
};

export default Gantt;
