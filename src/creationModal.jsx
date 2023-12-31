import React from "react";

const CreationModal = (props) => {
  const { closeCreationModal, eachNote, handleInputChange, addNotes } = props;

  // keyUp function for clicking "add" button with enter
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addNotes();
    }
  };

  return (
    <div className="w-full md:w-1/3 rounded-lg h-auto py-10 bg-[#101010] absolute flex flex-col items-center justify-center">
      <div className="w-full md:w-10/12 flex justify-end">
        <button onClick={closeCreationModal} className="text-white">
          x
        </button>
      </div>

      <span className="text-white text-lg md:text-xl">Create new note</span>
      <input
        placeholder="Enter text here"
        type="text"
        name="newNote"
        id="newNote"
        value={eachNote}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp} 
        className="bg-[#0c0c0c] border rounded-lg my-6 text-xl md:text-2xl text-gray-400 placeholder:text-xl py-4 md:py-6 px-6 md:px-12"
      />
      <button
        onClick={addNotes}
        className="px-8 py-2 text-white rounded-lg bg-indigo-600 hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  );
};

export default CreationModal;
