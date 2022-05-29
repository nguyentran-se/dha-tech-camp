import React, { useState } from "react";

function Challenge1() {
  const [isShow, setIsShow] = useState(false);
  function handleOpen() {
    setIsShow(true);
  }
  function handleClose() {
    setIsShow(false);
  }
  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      {/* 
      <div className="overlay">
        <div className="modal">
          <h3 className="modal-title">DataHouse Asia - TechCamp 🚀</h3>
          <div className="modal-content">
            <p>
              The very first Summer TechCamp is hosted by DataHouse Academy
              within 2 months starting from 16th May 2022, FREE enrollment fee!
              Aiming to become one of the best Training Centers in Da Nang,
              Summer TechCamp #1 provided by DataHouse Academy is an in-person
              training program for undergraduate students, fresher Techies, and
              even non-IT background learners.
            </p>
          </div>
          <button className="btn-clear">Close</button>
        </div>
      </div> 
      */}
    </div>
  );
}

export default Challenge1;
