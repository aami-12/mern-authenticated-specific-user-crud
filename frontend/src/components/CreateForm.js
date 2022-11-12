import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create note</h2>
      <form onSubmit={store.createNote}>
      <label>Name</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.name}
          name="name"
        />
      <label>Phone No</label>
          <input
          onChange={store.updateCreateFormField}
          value={store.createForm.phoneno}
          type="number"
          name="phoneno"
        />
      <label>Address1 </label>

          <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.address1}
          name="address1"
        />
      <label>Address2</label>

          <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.address2}
          name="address2"
        />
      <label>City</label>

          <input
          onChange={store.updateCreateFormField}
          value={store.createForm.city}
          name="city"
        />
      <label>State</label>

          <input
          onChange={store.updateCreateFormField}
          value={store.createForm.state}
          name="state"
        />
        <br />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}
