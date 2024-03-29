import React from "react";



function Footer() {
  return (
    <footer className="bg-dark text-light py-4 ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6">
            <p className="mb-0 style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}">
              © 2024 All rights reserved By <span className="font-weight-bold">Abinaya Raja</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;