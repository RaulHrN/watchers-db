import React from "react";
import { HomePage } from "./pages/home/home.page";
import { TmdbProvider } from "../provider/TmdbContext";

function App() {
  return (
    <TmdbProvider>
      <div className="App">
        <HomePage />
      </div>
    </TmdbProvider>
  );
}

export default App;
