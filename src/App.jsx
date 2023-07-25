import { useState } from "react";
import "./App.css";
import CreationModal from "./creationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [notes, setNotes] = useState([]);
  const [eachNote, setEachNote] = useState("");

  const handleInputChange = (e) => {
    setEachNote(e.target.value);
  };

  const addNotes = () => {
    if (eachNote.trim() !== "" && !notes.includes(eachNote)) {
      setNotes((current) => [...current, eachNote]);
      setEachNote("");
      closeCreationModal();
      toast.success("Added sir 🫡");
    } else {
      toast.error("either empty or already in there.");
    }
  };

  const openCreationModal = () => {
    setToggle(true);
  };

  const closeCreationModal = () => {
    setToggle(false);
  };

  console.log(notes);

  return (
    <>
      <main className="w-full min-h-screen bg-neutral-900 text-white text-3xl flex flex-col items-center justify-center">
        <header className="w-full max-w-2xl h-40 flex flex-col items-center justify-center">
          <span className="text-5xl sm:text-8xl">Mematiane'</span>
          <span className="mt-2 text-sm sm:text-base text-neutral-400">
            designed by{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/dachi.s_/"
              className="text-white"
            >
              @dsakhuria
            </a>
          </span>
        </header>
        {toggle && (
          <CreationModal
            closeCreationModal={closeCreationModal}
            notes={notes}
            eachNote={eachNote}
            handleInputChange={handleInputChange}
            addNotes={addNotes}
          />
        )}
        <button
          onClick={openCreationModal}
          className="border py-4 px-16 rounded-xl mt-8 sm:mt-16
            hover:bg-white hover:text-black"
        >
          Add notes
        </button>
        {notes.length > 0 && (
          <div className="w-full max-w-2xl mt-8 sm:mt-10 py-10 flex flex-col">
            <span className="w-full text-center py-6">Notes:</span>
            <ul className="w-full bg-[#111] text-neutral-400 rounded-lg flex flex-col justify-center items-center py-6">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="list w-full bg-[#151515] mt-3 mb-3 rounded-lg py-4"
                >
                  ({index}). {note}
                  <button
                    onClick={() => {
                      setNotes((current) =>
                        current.filter((_, i) => i !== index)
                      );
                      toast.warning("Note deleted.");
                    }}
                    className="delete hidden px-6 text-white"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ToastContainer
          className="text-xl"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </>
  );
}

export default App;
