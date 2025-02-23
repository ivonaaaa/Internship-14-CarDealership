const Filter = ({ setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search brand or model"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
