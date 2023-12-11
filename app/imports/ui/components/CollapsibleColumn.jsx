import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const CollapsibleColumn = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage collapse

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        type="button"
        onClick={toggleCollapse}
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleColumn"
        aria-expanded="false"
        aria-controls="collapsibleColumn"
      >
        Toggle Column
      </button>
      <div className="collapse" id="collapsibleColumn">
        <div className="card card-body">
          This is a collapsible column. It is now shown.
        </div>
      </div>
    </div>
  );
};

export default CollapsibleColumn;
