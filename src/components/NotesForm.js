import React from 'react'

const NotesForm = () => {
  const [note, setNote] = useState('');

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Note submitted:', note);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="noteInput">Note:</label>
        <input
          type="text"
          id="noteInput"
          value={note}
          onChange={handleInputChange}
          placeholder="Enter your note"
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};


export default NotesForm