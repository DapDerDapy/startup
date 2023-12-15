import React from 'react';
import './ApprovalModal.css'; // Assuming you will style your modal

function ApprovalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Your post is pending approval!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}





export default ApprovalModal;
