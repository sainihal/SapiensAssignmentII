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
        </ul>
      </div>
    </div>
  );
}
