import { memo } from 'react';

const CustomBtn = memo(({ onBtnClick }) => {
  console.log('here is custom btn render ');

  return <button onClick={onBtnClick}>Send</button>
});

export default CustomBtn;
