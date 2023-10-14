import Icon from "./Icon";

function Alert(props) {
  return (
    <div className="alert">
      <Icon name="info" />
      <span> {props.children}</span>
    </div>
  );
}

export default Alert;
