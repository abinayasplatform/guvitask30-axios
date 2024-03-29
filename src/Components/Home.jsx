import React from "react";
import { useUserContext } from "./Context/usercontext";
import "../Components/Home.css";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container my-5">
      <div className="row align-items-center">

      {/* to set icon on home page */}
      <div className="col-lg-7 text-center text-lg-start">
          <img
            src="https://cdn-icons-gif.flaticon.com/8121/8121277.gif"
            className="img-fluid"
            alt="Contact Us Illustration"
          />

        </div>  
        

        {/* To set a form that gets users details */}
        <div className="col-md-10 mx-auto col-lg-5">
            <h2 className="display-4 fw-bold lh-1 text-white mb-4">
              <span className="text-primary" >Enter Your</span> <span className="text-success">Data</span>
            </h2>


          <form
            className=" p-5 p-md-5 border rounded bg-white"
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            {/* to enter name */}
            <div className="mb-3 bg-dark">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


             {/* to enter email id */}
            <div className="mb-3 bg-dark">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            {/* to enter phone number */}
            <div className="mb-3 bg-dark">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* created a button that submit the details */}
            <button className="btn btn-primary w-100" type="submit">
              Add To List
            </button>
          </form>
        </div>

           
      </div>
    </div>
  );
}

export default Home;