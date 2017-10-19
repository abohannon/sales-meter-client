import React from 'react';
import Radium from 'radium';
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
  } = props;

  const length = moment(end).local().diff(moment(start).local());
  const d = moment.duration(length).days();
  const h = moment.duration(length).hours();
  const m = moment.duration(length).minutes();
  const dayText = d === 1 ? 'day' : 'days';
  const hourText = h === 1 ? 'hour' : 'hours';
  const minuteText = m === 1 ? 'minute' : 'minutes';

  const {
    container,
  } = createTimerStyles();

  return 0,
    <div>
      {start
        ? <div style={container}>
          <TimerIcon style={{ padding: '0 8px 0 0' }} />
          <div>
            <b>{d}</b> {dayText} <b>{h}</b> {hourText} and <b>{m}</b> {minuteText}
          </div>
        </div>
        : ''
      }
    </div>;
};


export default Radium(Timer);
