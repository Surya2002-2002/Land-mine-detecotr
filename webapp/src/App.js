import React, {useState, useEffect} from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listSearches } from './graphql/queries';
import { createSearch, deleteSearch } from './graphql/mutations';
import logo from './logo.svg';
import './App.css';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';


const initialFormState = { name: '', description: '', startLoc: '' }



Amplify.configure(config);


function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listSearches });
    setNotes(apiData.data.listSearches.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description || !formData.startLoc) return;
    await API.graphql({ query: createSearch, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteSearch, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'startLoc': e.target.value})}
        placeholder= "123"
        value={formData.startLoc}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <p>{note.startLoc}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);