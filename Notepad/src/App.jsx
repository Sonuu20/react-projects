import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Notelist from './components/Notelist';
import Search from './components/Search';
import Header from './components/Header';

function App() {
 const [notes, setNotes] = useState([]);
 const [searchText, setSearchText] = useState('');

 useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));

    // Check if there are no notes yet before setting them
    if (savedNotes && notes.length === 0) {
      setNotes(savedNotes);
    }

    // Cleanup: Remove data from local storage if notes are empty
    return () => {
      if (notes.length === 0) {
        localStorage.removeItem('react-notes-data');
      }
    };
 }, [notes]);

 useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
 }, [notes]);

 const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
 };

 const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
 };

 return (
    <div className="bg-cover bg-center h-screen bg-custom">
      <h1 className="h-8 w-full bg-slate-600 text-white flex justify-center items-center">
        Feel free to use this NotePad!😊
      </h1>
      <Header />
      <div className="max-w-6xl mr-auto ml-auto pr-4 pl-4">
        <Search handleSearchNote={setSearchText} />
        <Notelist
          notes={notes.filter(
            (note) => note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
 );
}

export default App;
