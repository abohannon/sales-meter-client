import React from 'react';
import Radium from 'radium';

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
  } = props;

  return 0,
    <div>
      { !goal
        ? <div style={container}>
          <div>Loading...</div>
        </div>
        : <div style={container}>
          <div style={statusItem}>
            {sales < goal
              ? <div><strong>{goal - sales} more needed</strong> to create this product</div>
              : <div>Goal reached! This product will be created.</div>
            }
          </div>
          <div style={statusItem}>
            <div>{Math.floor((sales / goal) * 100)}%</div>
          </div>
        </div>
  }
    </div>;
};

export default Radium(Status);
