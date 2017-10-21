import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const color = Math.random() > 0.5 ? 'red' : 'blue';

const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'Hello Prakash'
};

ReactDom.render(
  <App headerMessage="Hello react -- Prakash" />,
  document.getElementById('root')
);