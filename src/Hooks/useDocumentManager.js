import { useState, useEffect } from "react";

const useDocumentManager = () => {
  const [myUploads, setMyUploads] = useState([]);
  const [labelInput, setLabelInput] = useState("");
  const [fileNameInput, setFileNameInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadedUploads = JSON.parse(localStorage.getItem("myUploads")) || [];
    setMyUploads(loadedUploads);
  }, []);

  const handleSaveUpload = () => {
    const updatedUploads = [...myUploads];
    if (editIndex === -1) {
      updatedUploads.push({ label: labelInput, fileName: fileNameInput });
    } else {
      updatedUploads[editIndex] = {
        label: labelInput,
        fileName: fileNameInput,
      };
    }
    setMyUploads(updatedUploads);
    localStorage.setItem("myUploads", JSON.stringify(updatedUploads));
    handleCloseModal();
  };

  const handleEditUpload = (index) => {
    setEditIndex(index);
    setLabelInput(myUploads[index].label);
    setFileNameInput(myUploads[index].fileName);
    setShowModal(true);
  };

  const handleDeleteUpload = (index) => {
    const updatedUploads = myUploads.filter((_, i) => i !== index);
    setMyUploads(updatedUploads);
    localStorage.setItem("myUploads", JSON.stringify(updatedUploads));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditIndex(-1);
    setLabelInput("");
    setFileNameInput("");
  };

  return {
    myUploads,
    showModal,
    labelInput,
    fileNameInput,
    editIndex,
    setShowModal,
    setLabelInput,
    setFileNameInput,
    handleSaveUpload,
    handleEditUpload,
    handleDeleteUpload,
    handleCloseModal,
  };
};

export default useDocumentManager;
