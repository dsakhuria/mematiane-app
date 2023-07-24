import React from "react";

const CreationModal = (props) => {
  return (
    <div className="w-1/3 rounded-lg h-auto py-10 bg-[#101010] absolute flex flex-col items-center justify-center">
      <div className="w-10/12 flex justify-end">
        <button onClick={props.closeCreationModal}>x</button>
      </div>

      <span className="text-white">Create new note</span>
      <input
        placeholder="Enter text here"
        type="text"
        name="newNote"
        id="newNote"
        value={props.eachNote}
        onChange={props.handleInputChange}
        className="bg-[#0c0c0c] border rounded-lg 
                            my-6 
                            text-xl text-gray-400 
                            placeholder:text-xl
                            py-16
                            px-24
                            "
      />
      <button onClick={props.addNotes}>Add</button>
    </div>
  );
};

export default CreationModal;
