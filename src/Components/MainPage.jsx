import React from "react";

export default function MainPage(props) {
  return (
    <div style={{ width: "max-content", margin: "auto", padding: "50px" }}>
      <div>
        <h1> Welcome to Sapiens Assignmet</h1>
        <ul style={{ margin: 25 }}>
          <li className="mainInstructions">
            <h2> Click on the Form to add data. </h2>
          </li>
          <li className="mainInstructions">
            <h2> Click on the List to view the list of added data. </h2>
          </li>
          <li className="mainInstructions">
            <h2> Form has basic validations for email chech and first_name and last_name has min length of 3. </h2>
          </li>
          <li className="mainInstructions">
            <h2> Also this app doesn't allow duplicate emails.</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
