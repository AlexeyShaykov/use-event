const CustomInput = ({ onTextChange, text }) => {
  return (
    <input 
      className="my-input" 
      value={text} 
      type="text" 
      onChange={({ target: { value } }) => onTextChange(value)} 
    />
  )
};

export default CustomInput;
