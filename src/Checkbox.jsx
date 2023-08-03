function Checkbox(props) {
  const modifier = {
    null: "",
    true: "checkbox__input--done",
    false: "checkbox__input--undone",
  };

  return (
    <div className="checkbox" onClick={props.onClick}>
      <div className={`checkbox__input ${modifier[props.done]}`}>
        {props.done !== null && (
          <img className="checkbox__image" src={props.done ? "done.svg" : "undone.svg"} />
        )}
      </div>
      <span>{props.label}</span>
    </div>
  );
}

export default Checkbox;
