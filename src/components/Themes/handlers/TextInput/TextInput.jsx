const TextInput = (props) => {
  return (
    <div className="global-input__container">
      <input className="global-input" {...props} />
      <p className="global-input__error">{props.error}</p>
    </div>
  );
};

export default TextInput;
