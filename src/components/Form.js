const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Address is submitted", e);
};
function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter address" />
      <button>Save</button>
    </form>
  );
}

export default Form;
