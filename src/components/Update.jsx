import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);

  const { name, email } = existingUser[0];

  const [uname, setUName] = useState(name);
  const [uemail, setUEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => setUName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={uemail}
              onChange={(e) => setUEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
