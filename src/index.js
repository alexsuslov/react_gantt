import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


import s from '../css/style.css';
import Left from './left';
import Right from './right';

const createDays = (from, to, cls='day') => {
  const data = [];
  let i = from;
  let tmp;
  while(i < to){
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = i.getDate();
    i = i.setDate(tmp.label + 1 );
    tmp.to = i + 0
    data.push(tmp);
  }
  return data;
}

const createWeekDays = (from, to, cls='day') => {
  const data = [];
  let i = from;
  let tmp;
  while(i < to){
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = moment(i).format('ddd');
    i = i.setDate(i.getDate() + 1 );
    tmp.to = i + 0
    data.push(tmp);
  }
  return data;
}


const createWeeks = (from, to, cls='week') => {
  const data = [];
  let i = new Date(from);
  i = i.setDate(i.getDate() - i.getDay(), 0, 0, 0 );
  let tmp;
  while(i < to){
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = moment(i).format('W');
    i = i.setDate(i.getDate() + 7 );
    tmp.to = i
    data.push(tmp);
  }
  return data;
}

const createMonths = (from, to, cls='month' ) => {
  const data = [];
  let i = new Date(from);
  i = i.setDate(1, 0, 0, 0);
  let tmp;
  while(i < to){
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = (cls === 'month')
      ? moment(i).format('MMMM')
      : moment(i).format('MMM');
    i = i.setMonth(i.getMonth() + 1 );
    tmp.to = i
    data.push(tmp);
  }
  return data;
}

const createYears = (from, to, cls='year') => {
  const data = [];
  let i = new Date(from);
  i.setMonth(0, 1, 0, 0, 0);
  i = i.getTime();
  let tmp;
  while(i < to){
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = i.getFullYear();
    i = i.setFullYear(tmp.label + 1 );
    tmp.to = i
    data.push(tmp);
  }
  return data;
}

const Time = {
  s(t) { return t * 1000 },
  m(t) { return this.s(t * 60) },
  h(t) { return this.m(t * 60) },
  d(t) { return this.h(t * 24) },
  w(t) { return this.d(t * 7) },
};

const Zooms = ['day', 'week', 'month'];

class Gantt extends React.Component {
  state = {
    zoom: 0,
  }
  setZoom(val) {
    const state = this.state;
    const zoom = (val) ? state.zoom + 1 : state.zoom - 1;
    if(Zooms[zoom]){
      this.setState({...state, zoom});
    }
  }

  render() {
    const props = {...this.props, setZoom: this.setZoom.bind(this) };
    let k, start, stop, cells, width, space;
    const data = [];

    const { cell, zoom } = props;

    switch(Zooms[this.state.zoom]) {
      case 'month':
        k = Time.d( 365 / 12 ) / cell;
        start = new Date(props.start);
        start.setDate(1, 0, 0, 0);
        start.setMonth(start.getMonth() - 3);

        stop = new Date(props.stop);
        stop.setMonth(stop.getMonth() + 3);
        stop.setDate(-1, 0, 0, 0);
        const arMonths = createMonths(start, stop, 'day');
        width = arMonths.length * cell;
        data.push({ values: createYears(start, stop) });
        data.push({ values: arMonths });
        space = 2;
        break;

      case 'week':
        k = Time.d(7) / cell;
        start = new Date(props.start);
        start.setHours(0, 0, 0);
        start.setDate(start.getDate() - start.getDay() - 3 * 7);

        stop = new Date(props.stop);
        stop.setHours(0, 0, 0);
        stop.setDate(stop.getDate() - start.getDay() + 3 * 7 - 1);
        const arWeeks = createWeeks(start, stop);
        width = arWeeks.length * cell;
        data.push({ values: createYears(start, stop) });
        data.push({ values: createMonths(start, stop) });
        data.push({ values: arWeeks });
        space = 3;
        break;

      default:
        start = new Date(props.start);
        start.setHours(0, 0, 0);
        start.setDate(start.getDate() - 3)

        stop = new Date(props.stop);
        stop.setHours(0, 0, 0);
        stop.setDate(stop.getDate() + 4);
        k = Time.d(1) / cell;
        const arDays = createDays(start, stop);
        width = arDays.length * cell;
        data.push({ values: createYears(start, stop) });
        data.push({ values: createMonths(start, stop) });
        data.push({ values: arDays });
        data.push({ values: createWeekDays(start, stop) });
        space = 4;
    }

    const propsLeft = {
      space, data: props.data, cell,
    };

    const propsRight = {
      ...props,
      start, stop, space, width, k,
      data: [
        ...data,
        ...props.data,
      ],
    };

    return (<div className={s.gantt}>
      <Left {...propsLeft} />
      <Right {...propsRight} />
    </div>)
  }
};

export default Gantt;
