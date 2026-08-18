import { useState } from "react";

const Toggle = () => {
  const [BgColor, SetBgColor] = useState("white");
  const [TxtColor, SetTxtColor] = useState("#1b1b1b");
  const [BtnStyle, SetBtnStyle] = useState("white");

  const HandleClick = () => {
    SetBgColor(BgColor === "white" ? "#1b1b1b" : "white");
    SetTxtColor(TxtColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    SetBtnStyle(BgColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <section
      style={{
        backgroundColor: BgColor,
        color: TxtColor,
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section className="Content" style={{ textAlign: "center" }}>
        <button
          onClick={HandleClick}
          style={{
            backgroundColor: BtnStyle,
            color: TxtColor,
            border: `2px solid ${TxtColor}`,
            padding: "10px 20px",
            cursor: "pointer",
            marginBottom: "2rem", // space above heading
          }}
        >
          {BgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>

        <h1>
          Welcome to <br />
          real world
        </h1>
      </section>
    </section>
  );
};

export default Toggle;