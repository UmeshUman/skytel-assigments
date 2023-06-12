import React from 'react';
import MultiSelect from './MultiSelect/MultiSelect';
import s from "./style.module.css"

const App = () => {
  return (
    <div>
      <h1>MultiSelect Dropdown</h1>
      <MultiSelect value={['val1', 'val2']} readonly={false} />
    </div>
  );
};

export default App;