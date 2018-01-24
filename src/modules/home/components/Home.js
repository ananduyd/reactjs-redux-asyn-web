import React from 'react';

export default ({sampleAction, home:{sampleData}}) => (
  <div>
    <h1>Home</h1>
    <h2>And check state</h2>
    <button onClick={() => sampleAction("I'm a lazy action...")}>
      Click here to see the action being trigerred!
    </button>
    {sampleData? <div className="m-t-sm">And the action set this on the store: <b>"{sampleData}"</b></div> : null }
  </div>
);