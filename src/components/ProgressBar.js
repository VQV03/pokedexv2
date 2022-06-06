const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: '',
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    fontSize: `8px`
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: '0px 12px',
    color: 'white',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
