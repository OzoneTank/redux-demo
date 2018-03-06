import React from 'react';

const InfoComponent = ({ totalTodos, info, actions }) => {
  const {
    resetInfo,
    addFeedDogsTodo
  } = actions.info;

  return (
    <div>
      <h3>Info</h3>
      <div>
        <span>Total Todos:</span>
        <span>{totalTodos}</span>
      </div>
      <div>
        <span>Created:</span>
        <span>{info.get('created')}</span>
      </div>
      <div>
        <span>Completed:</span>
        <span>{info.get('done')}</span>
      </div>
      <div>
        <div
          className="App-button"
          onClick={() => resetInfo()}>
          Reset Info
        </div>
        <div
          className="App-button"
          onClick={() => addFeedDogsTodo()}>
          Remind Me To Feed The Dogs
        </div>
      </div>
    </div>
  );
}

export default InfoComponent;
