const Button = ({ text, onClick, className, type, value }) => {
  return (
    <div>
      <button className={className} onClick={onClick} type={type} value={value}>
        {text}
      </button>
    </div>
  );
};

export default Button;
