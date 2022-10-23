const Button = (props) => {
  return (
    <button className={`global-button ${props.className && props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
