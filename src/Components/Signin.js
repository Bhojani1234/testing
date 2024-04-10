import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

function Signin() {
  return (
    <>
      <section>
        <div className="container w-100">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="mt-1 mb-5 pb-1">
                        <img
                          src={require("../assets/images/XENSPIRE-group-PNG-logo 2.png")}
                        />
                      </div>

                      <form>
                        <div className="mt-1 mb-5 pb-1 text-color">
                          <h5>
                            Welcome to Xenflexer Program for IT Consultants
                          </h5>
                          <h6>Welcome back! Please enter your details.</h6>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Enter password"
                          />
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check mb-3">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3"
                            />
                            <label class="form-check-label" for="form2Example3">
                              Remember me
                            </label>
                          </div>
                          <a href="#!" class="text-body mb-2">
                            Forgot password?
                          </a>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className=" login-btn btn-block fa-lg gradient-custom-2 mb-3 w-100"
                            type="button"
                          >
                            Sign in
                          </button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <Link className="Signup-btn"> Sign up</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center ">
                      <img
                        src={require("../assets/images/pngaaa 1.png")}
                        className="img-fluid"
                        alt="Sample image"
                      />
                      <h4 className="mb-4">Xenflexer IT Consultants</h4>
                      <p className="small mb-0">
                        Originating from our CEO’s personal struggles in the
                        industry, Xenspire Group, with over 25 years in staffing
                        across Healthcare, Biotech, and IT, is dedicated to
                        positively transforming talent acquisition by removing
                        opaque practices and excessive middleman fees, ensuring
                        transparency and fairness for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signin;
