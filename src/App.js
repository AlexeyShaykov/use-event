import { useState } from 'react'; 

import CustomInput from './CustomInput';
import CustomBtn from './CustomBtn';
import useEvent from './useEvent';

function App() {
  const [text, onTextChange] = useState('');

  const onBtnClick = useEvent(() => {
    console.log('here is click ', text);
  });


  return (
    <div className="App">
      <CustomInput onTextChange={onTextChange} text={text} />
      <CustomBtn onBtnClick={onBtnClick} />
    </div>
  );
}

export default App;
