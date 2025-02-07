const Input = ({ name, type, onChange, placeholder, label, required }) => {
  return (
    <div className="inputfield">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      ></input>
    </div>
  );
};

export default Input;
