import React from "react";
import Image from "next/image";
// import "styles/globals.scss";

const Training = () => {
  return (
    <div className="container fourBoxesContainer">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="box">
            <div className="logo">
              <Image src="/logo1.png" alt="Logo 1" width={80} height={80} />
            </div>
            <h4 className="name">Nesma injazat</h4>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="box">
            <div className="logo">
              <Image src="/logo2.png" alt="Logo 2" width={80} height={80} />
            </div>
            <h4 className="name">abu dhabi airport</h4>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="box">
            <div className="logo">
              <Image src="/logo3.png" alt="Logo 3" width={80} height={80} />
            </div>
            <h4 className="name">Diamond Lounge</h4>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="box">
            <div className="logo">
              <Image src="/logo4.png" alt="Logo 4" width={80} height={80} />
            </div>
            <h4 className="name">SALAM </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
