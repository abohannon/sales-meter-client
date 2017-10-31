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

  const now = moment().local();
  const exp = moment(end);
  const diffDuration = moment.duration(exp.diff(now));
  const d = diffDuration.days() >= 0 ? diffDuration.days() : 0;
  const h = diffDuration.hours() >= 0 ? diffDuration.hours() : 0;
  const m = diffDuration.minutes() >= 0 ? diffDuration.minutes() : 0;
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
