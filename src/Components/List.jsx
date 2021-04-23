import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getData } from "../Redux/ListReducer/actions";

export default function List(props) {
  const data = useSelector((state) => state.list.data);
  const isLoading = useSelector((state) => state.list.isLoading);
  const isError = useSelector((state) => state.list.isError);
  const msg = useSelector((state) => state.list.msg);
  const success = useSelector((state) => state.list.success);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  } else if (success) {
    return <div className="message success">Data Fetched Successfully.</div>;
  } else if (isError) {
    return (
      <div className="message error">
        {"error in fetching the data with message"}
        <span style={{ color: "red" }}> {msg} </span>
      </div>
    );
  } else {
    const entries =
      data &&
      data.map((entry) => {
        return (
          <tr key={uuidv4()}>
            {/* <th scope="row">{entry.id}</th> */}
            <td>{entry.first_name}</td>
            <td>{entry.last_name}</td>
            <td>{entry.email}</td>
          </tr>
        );
      });
    return (
      <div style={{width:800,margin:"auto"}}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">Id</th> */}
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{entries.map((ele) => ele)}</tbody>
        </table>
      </div>
    );
  }
}
