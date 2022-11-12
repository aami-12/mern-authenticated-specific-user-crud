import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update note</h2>
      <form onSubmit={store.updateNote}>
       <label>Name</label>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.name}
          name="name"
        />
      <label>Phone No</label>
          <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.phoneno}
          type="number"
          name="phoneno"
        />
      <label>Address1 </label>

          <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.address1}
          name="address1"
        />
      <label>Address2</label>

          <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.address2}
          name="address2"
        />
      <label>City</label>

          <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.city}
          name="city"
        />
      <label>State</label>

          <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.state}
          name="state"
        />
       <br />
        <button type="submit">Update note</button>
      </form>
    </div>
  );
}
