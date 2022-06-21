import { useCallback, useState, useRef } from 'react'; 

import CustomInput from './CustomInput';
import CustomBtn from './CustomBtn';

function App() {
  const [text, onTextChange] = useState('');

  const handlerRef = useRef(null);
  handlerRef.current = text;

  const onBtnClick = useCallback(() => {
    console.log('here is click ', handlerRef.current);
  }, [])


  return (
    <div className="App">
      <CustomInput onTextChange={onTextChange} text={text} />
      <CustomBtn onBtnClick={onBtnClick} />
    </div>
  );
}

export default App;
