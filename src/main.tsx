import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./components/Provider";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <div>
      <Provider className="bg-white text-w-400">
        <section className="bg-red-300 h-[100vh]">
          <span>1</span>
        </section>
        <section className="bg-green-300 h-[100vh]">
          <span>2</span>
        </section>
        <section className="bg-yellow-300 h-[100vh]">
          <span>3</span>
        </section>
        <section className="bg-gray-300 h-[100vh]">
          <span>4</span>
        </section>
        <footer>
          <span>footer</span>
        </footer>
      </Provider>
    </div>
  </React.StrictMode>
);
