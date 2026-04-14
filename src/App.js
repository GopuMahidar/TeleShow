import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Header */}
      <header
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          backgroundColor: "teal",
          color: "white",
          padding: "20px"
        }}
      >
        TeleShow
      </header>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#f8c8dc",
          fontSize: "22px",
          padding: "30px",
          textAlign: "center",
          marginTop: "10px",
          borderRadius: "10px"
        }}
      >
        <h2>👋 Welcome to TeleShow</h2>
        <p>
          This is a custom platform created by Tharakksss 🚀 mahider
        </p>
      </div>

    </div>
  );
}

export default App;