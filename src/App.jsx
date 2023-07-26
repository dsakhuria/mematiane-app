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
                  className="
                  flex text-xl items-center justify-center 
                  w-full bg-[#151515] mt-3 mb-3 rounded-lg py-4
                  list
                  sm:text-3xl
                  sm:justify-start
                            "
                >
                  ({index}). {note}
                  <button
                    onClick={() => {
                      setNotes((current) =>
                        current.filter((_, i) => i !== index)
                      );
                      toast.warning("Note deleted.");
                    }}
                    className="
                    flex mx-6 text-white
                    delete sm:hidden sm:px-6 sm:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

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
