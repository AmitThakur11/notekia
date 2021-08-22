import "./styles.css";
import { useState } from "react";
import Logo from "./svg/logo2.png";
import { useData } from "./Conext/dataContext";
export default function App() {
  const { msg, getInput, data, saveData, delData, setData, setMsg } = useData();
  const color = [
    "lightgreen",
    "lightcyan",
    "lightpink",
    "lightblue",
    "lightseagreen",
    "lightsalmon"
  ];
  const colorChange = (color, note) => {
    const newData = data.map((item) =>
      item.id === note.id ? { ...item, color: color } : item
    );
    setData(newData);
  };

  const changeinputCol = (color) => {
    setMsg((msg) => {
      return { ...msg, color: color };
    });
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={Logo} alt="err" width="50px" />
          <div className="name">NOTEkia</div>
        </div>
        <div className="header-link">
          <div>Home</div>
          <div>Login</div>
        </div>
      </header>
      <div className="input">
        <input
          value={msg.title}
          onChange={(e) => getInput(e)}
          placeholder="enter title"
          name="title"
        />
        <textarea
          value={msg.body}
          onChange={(e) => getInput(e)}
          placeholder="enter body "
          name="body"
        ></textarea>
        <button onClick={() => saveData()}>
          <i className="fa fa-plus"></i>
        </button>
        <div className="input-color-pallete">
          {color.map((col) => {
            return (
              <div
                key={col}
                onClick={() => changeinputCol(col)}
                className="color"
                style={{ backgroundColor: `${col}` }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="result-container">
        <div className="result">
          <h1>Notes.....</h1>
          {data.length === 0 && (
            <div style={{ backgroundColor: "white" }} className="box">
              <div className="title">Team NoteKia </div>
              <div className="body">Lets write your first note</div>
              <div className="color-pallete">
                {color.map((col) => {
                  return (
                    <div
                      className="color"
                      style={{ backgroundColor: `${col}` }}
                    ></div>
                  );
                })}
              </div>

              <button>
                <i className="fa fa-trash"></i>
              </button>
              <i className="fa fa-thumb-tack pin"></i>
            </div>
          )}
          <div className="box-container">
            {data?.map((item) => {
              return (
                <div
                  style={{ backgroundColor: `${item.color}` }}
                  key={item.id}
                  className="box"
                >
                  <div className="title">{item.title}</div>
                  <div className="body">{item.body}</div>
                  <div className="color-pallete">
                    {color.map((col) => {
                      return (
                        <div
                          key={col}
                          onClick={() => colorChange(col, item)}
                          className="color"
                          style={{ backgroundColor: `${col}` }}
                        ></div>
                      );
                    })}
                  </div>

                  <button onClick={() => delData(item.id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  <i className="fa fa-thumb-tack pin"></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
