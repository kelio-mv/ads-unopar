function Arrow(props) {
  const points = {
    up: "0,7 12,7 6,0",
    down: "0,0 12,0 6,7",
  };

  return (
    <svg width={12} height={7} fill="#4b5563">
      <polygon points={points[props.direction]} />
    </svg>
  );
}

export default Arrow;
