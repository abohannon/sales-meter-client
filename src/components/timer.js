import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimerIcon from 'material-ui/svg-icons/action/schedule';

const createTimerStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
});

const Timer = (props) => {
  const {
    start,
    end,
    goal,
  } = props;

  const length = moment(end).local().diff(moment(start).local());
  const d = moment.duration(length).days();
  const h = moment.duration(length).hours();
  const m = moment.duration(length).minutes();

  const {
    container,
  } = createTimerStyles();

  return 0,
    <div>
      {start
        ? <div style={container}>
          <TimerIcon style={{ padding: '0 8px 0 0' }} />
          <div><strong>{d}</strong> days <strong>{h}</strong> hours and <strong>{m}</strong> minutes</div>
        </div>
        : ''
      }
    </div>;
};


export default Radium(Timer);
