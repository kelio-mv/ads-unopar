function Alert(props) {
  return (
    <div className="alert">
      <img src="info.svg" />
      <span> {props.children}</span>
    </div>
  );
}

export default Alert;
