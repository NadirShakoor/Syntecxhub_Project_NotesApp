import { useState, useRef, useEffect } from "react";
import { FaPlus, FaStickyNote } from "react-icons/fa";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addNote(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="bg-white/20 backdrop-blur-md shadow-xl rounded-2xl p-6 mb-8 border border-white/30">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-center"
      >
        {/* Input Field */}
        <div className="flex items-center flex-1 w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500 transition">
          
          {/* Icon */}
          <FaStickyNote className="text-blue-500 text-xl mr-3 flex-shrink-0" />

          {/* Input */}
          <input
            ref={inputRef}
            value={text}
            onChange={(e) =>
              setText(e.target.value.length <= 100 ? e.target.value : text)
            }
            placeholder="Write your note"
            className="w-full border-none outline-none bg-transparent text-white placeholder-white text-base"
          />
        </div>

        {/* Character Count */}
        <p className="text-sm text-white mt-1 md:mt-0 md:ml-2 text-right">
          {text.length} / 100
        </p>

        {/* Add Note Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2
            bg-gradient-to-r from-purple-600 to-indigo-600
            text-white px-6 py-3 rounded-2xl
            shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
        >
          <FaPlus />
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;