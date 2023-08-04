function Alert(props) {
  return (
    <div className="alert">
      <img src="info.svg" className="alert__icon" />
      <span> {props.children}</span>
    </div>
  );
}

export default Alert;
