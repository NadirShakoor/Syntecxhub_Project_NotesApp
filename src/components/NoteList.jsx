import { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

function NoteList({ notes, deleteNote, editNote }) {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleEditClick = (note) => {
    setEditingId(note.id);
    setEditingText(note.text);
  };

  const handleSaveClick = (id) => {
    editNote({ id, text: editingText });
    setEditingId(null);
    setEditingText("");
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white/20 backdrop-blur-md border border-white/30
                     rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[180px]"
        >
          {editingId === note.id ? (
            <>
              {/* Editable Textarea */}
              <textarea
                value={editingText}
                onChange={(e) =>
                  setEditingText(
                    e.target.value.length <= 100 ? e.target.value : editingText
                  )
                }
                placeholder="Edit your note..."
                className="w-full p-3 rounded-xl border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           resize-none h-36 text-white bg-white/20 placeholder-white backdrop-blur-sm"
              />

              {/* Character Count */}
              <p className="text-sm text-white mt-2 text-right">
                Characters: {editingText.length} / 100
              </p>

              {/* Save / Cancel Buttons */}
              <div className="flex gap-3 mt-3 justify-end">
                <button
                  onClick={() => handleSaveClick(note.id)}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
                >
                  <FaSave /> Save
                </button>

                <button
                  onClick={handleCancelClick}
                  className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Note Text */}
              <p className="text-white min-h-[100px] break-words">
                {note.text}
              </p>

              {/* Edit/Delete Buttons */}
              <div className="flex gap-3 mt-3 justify-end">
                <button
                  onClick={() => handleEditClick(note)}
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
                >
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="flex items-center gap-1 text-red-400 hover:text-red-300 transition"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;