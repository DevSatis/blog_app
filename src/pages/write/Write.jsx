import "./Write.css";

import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Write = () => {
  return (
    <div className="write">
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <AddIcon />
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Enter the title" />
            </div>
        </form>
    </div>
  )
}

export default Write