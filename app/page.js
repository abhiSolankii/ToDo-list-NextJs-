"use client";
import "./page.css";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task, desc }]);
    settask("");
    setdesc("");
    console.log(task);
    console.log(desc);
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copyTask1 = [...mainTask];
    let removedTask = copyTask1.splice(i, 1);
    setmainTask(copyTask1);

    // alert("Deleted: " + JSON.stringify(removedTask[0].task));
  };
  const editHandler = (i) => {
    let copyTask2 = [...mainTask];
    settask(copyTask2[i].task);
    setdesc(copyTask2[i].desc);
    deleteHandler(i);
  };
  let renderTask = (
    <div
      style={{
        padding: "1rem 0 1rem 1rem",
        fontFamily: "initial",
        fontSize: "1.5rem",
      }}
    >
      No Task available
    </div>
  );
  if (mainTask.length > 0) {
    renderTask = mainTask.map((obj, i) => {
      return (
        <li key={i} style={{ listStyle: "none" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 0 0.5rem 0",
              padding: "0 1rem 0 1rem",
              fontSize: "1.5rem",
            }}
          >
            <h4 style={{ fontFamily: "monospace" }}>{obj.task}</h4>
            <h5 style={{ fontFamily: "serif" }}>{obj.desc}</h5>
            <div style={{}}>
              <button
                style={{
                  backgroundColor: "blue",
                  height: "2rem",
                  width: "4rem",
                  color: "white",
                }}
                onClick={() => editHandler(i)}
              >
                Edit
              </button>
              <button
                style={{
                  backgroundColor: "red",
                  height: "2rem",
                  width: "4rem",
                  color: "white",
                }}
                onClick={() => {
                  deleteHandler(i);
                }}
              >
                Delete
              </button>
            </div>
          </div>

          <hr></hr>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className="title">My todo list</h1>
      <form onSubmit={submitHandler}>
        <input
          className="input-box-1"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          className="input-box-2"
          placeholder="Enter description..."
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="add">Add task</button>
      </form>
      <hr></hr>
      <div
        style={{
          backgroundColor: "lightgrey",
        }}
      >
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
