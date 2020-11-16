import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid rgba(100,40,100,0.2)', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;