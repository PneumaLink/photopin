const SelectBox = ({ name, id, option, onChange }) => {
  return (
    <select name={name} id={id} onChange={onChange}>
      {option.map((it) => (
        <option key={it} value={it}>
          {it}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
