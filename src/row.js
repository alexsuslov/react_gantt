import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from '../css/gantt.css';
import Box from './box';

const Row = props => {
  const { cell, start, stop } = props;
  return (<div className={s.row}>
    {props.values.map((v, key)=>(<Box {...{ ...props, ...v, key }} />))}
  </div>)
};

export default Row;