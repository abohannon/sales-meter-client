import React from 'react';
import Radium from 'radium';
import moment from 'moment';

const createStatusStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '8px 0 8px 0',
  },
  statusItem: {
    padding: '8px 0 0 0',
  },
});

const Status = (props) => {
  const {
    container,
    statusItem,
  } = createStatusStyles();

  const {
    goal,
    sales,
    end,
  } = props;

  let message;

  if (sales < goal && moment().isBefore(moment(end))) {
    message = <div><strong>{goal - sales} more needed</strong> to create this product</div>;
  } else if (sales >= goal) {
    message = <div>Goal reached! This product will be created.</div>;
  } else {
    message = <div>Sorry! We didn&apos;t reach our goal for this product.</div>;
  }

  return 0,
    <div>
      { !goal
        ? <div style={container}>
          <div>Loading...</div>
        </div>
        : <div style={container}>
          <div style={statusItem}>
            {message}
          </div>
          <div style={statusItem}>
            <div>{Math.floor((sales / goal) * 100)}%</div>
          </div>
        </div>
  }
    </div>;
};

export default Radium(Status);
