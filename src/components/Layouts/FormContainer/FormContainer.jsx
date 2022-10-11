const FormContainer = (props) => {
  return (
    <form className="global-form" onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {props.children}
    </form>
  );
};

export default FormContainer;
