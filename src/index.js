import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import BookDetails from "./components/BookDetails/BookDetails"
import BookList from "./components/BookList/BookList"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="booklist" element={<BookList />} />
        <Route path="/booklist/:id" element={<BookDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);