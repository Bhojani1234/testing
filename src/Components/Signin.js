import React from "react";

function Signin() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 align-items-center ">
          <form>
            <div>
              <img
                src={require("../assets/images/XENSPIRE-group-PNG-logo 2.png")}
              />
            </div>
            <div>
              <h4>Welcome to Xenflexer Program for IT Consultants</h4>
              <h5>Welcome back! Please enter your details.</h5>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className=" col-md-6 "></div>
      </div>
    </>
  );
}

export default Signin;
