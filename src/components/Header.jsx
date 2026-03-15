import { FaStickyNote } from "react-icons/fa";

function Header() {
  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="max-w-6xl mx-auto flex items-center gap-4">

        {/* Glassy Icon */}
        <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <FaStickyNote className="text-purple-500 text-3xl" />
        </div>

        {/* App Title + Author */}
        <div className="flex flex-col">

          {/* Notes App Title */}
          <h1
            className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30
            text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            drop-shadow-lg tracking-wide shadow-md"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Notes App
          </h1>

          {/* Author Name */}
          <span
            className="text-[10px] sm:text-xs text-white/70 ml-4 mt-1 tracking-wide"
             style={{ fontFamily: "Pacifico, cursive" }}
          >
            By Nadir Shakoor Khatti
          </span>

        </div>

      </div>
    </header>
  );
}

export default Header;