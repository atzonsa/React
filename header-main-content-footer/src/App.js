import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
