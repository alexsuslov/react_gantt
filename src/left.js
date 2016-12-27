import React, { PropTypes } from 'react';
import s from '../css/style.css';

const Left = props => {
  const { cell, data, space } = props;
  const style = { height: space * cell };
  return (<div className={s.column}>
    <div className={s.spacer} style={style}></div>
    {data.map((v, key) => (<div key={key} className={s.row}>
      <div className={s.name}>{v.name}</div>
      <div className={s.desc}>{v.desc}</div>
    </div>))}
  </div>);
};

export default Left;
