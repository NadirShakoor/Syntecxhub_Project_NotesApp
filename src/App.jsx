import { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import BG from "./assets/BG.webp";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add note (max 100 chars)
  const addNote = (text) => {
    const truncatedText = text.slice(0, 100);
    const newNote = { id: Date.now(), text: truncatedText };
    setNotes([newNote, ...notes]);
  };

  // Edit note inline (max 100 chars)
  const editNote = ({ id, text }) => {
    const truncatedText = text.slice(0, 100);
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: truncatedText } : note))
    );
  };

  // Delete note
  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">

      {/* Background Image */}
      <img
        src={ BG }
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Glassy Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Header />
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </div>
    </div>
  );
}

export default App;