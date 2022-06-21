import { useState } from 'react'; 

import CustomInput from './CustomInput';
import CustomBtn from './CustomBtn';

function App() {
  const [text, onTextChange] = useState('');

  const onBtnClick = () => {
    console.log('here is click ', text);
  }

  return (
    <div className="App">
      <CustomInput onTextChange={onTextChange} text={text} />
      <CustomBtn onBtnClick={onBtnClick} />
    </div>
  );
}

export default App;
