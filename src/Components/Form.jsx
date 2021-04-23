import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addData } from "../Redux/FormReducer/actions";
export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const isLoading = useSelector((state) => state.form.isLoading);
  const isError = useSelector((state) => state.form.isError);
  const msg = useSelector((state) => state.form.msg);
  const success = useSelector((state) => state.form.success);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      addData({ first_name: firstName, last_name: lastName, email: email })
    );
  };
  if (isLoading) {
    return <div style={{ textAlign: "center" }}> Loading...</div>;
  } else if (isError) {
    return <div className="message error"> {msg} </div>;
  } else if (success) {
    return <div className="message success"> {msg}</div>;
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center" }}> FORM </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div
            style={{
              width: "500px",
              margin: "auto",
              border: "3px solid",
              borderColor: "rgb(194,130,192)",
              padding: "50px",
            }}
          >
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                required
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                required
              />
            </div>
            <br />
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                value={email}
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "400px" }}
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
