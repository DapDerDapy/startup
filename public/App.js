import React, { useState } from 'react';
import ApprovalModal from './ApprovalModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostSubmit = () => {
    // Handle post submission logic
    setIsModalOpen(true); // Open the modal on post submission
  };

  return (
    <div className="App">
      <button onClick={handlePostSubmit}>Add Post</button>
      <ApprovalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
