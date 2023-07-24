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
        <header className="w-auto h-40 flex items-center justify-center">
          <span className="text-[158px] subpixel-antialiased">Mematiane'</span>
          <span className="w-auto h-20 flex items-end text-neutral-400">
            designed by <a target="_blank" href="https://www.instagram.com/dachi.s_/" className="mx-3 text-white">@dsakhuria</a>
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
          className="border py-4 px-16 
                    rounded-xl 
                    ease-out 
                    mt-16
                  hover:bg-white hover:text-black"
        >
          Add some notes
        </button>
        {notes.length > 0 && (
          <div className="w-10/12 h-auto mt-10 py-10 flex flex-col">
            <span className="w-full text-center py-6">Notes:</span>
            <ul
              className="w-full h-auto bg-[#111] text-neutral-400 rounded-lg flex flex-col justify-center items-center py-6"
            >
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="list w-11/12 h-auto bg-[#151515] mt-3 mb-3 rounded-lg py-4"
                >
                  ({index}). {note} 
                  <button
                    onClick={() => {
                      setNotes((current) => current.filter((_, i) => i !== index));
                      toast.warning('Note deleted.')
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
