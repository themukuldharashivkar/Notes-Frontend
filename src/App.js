import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Notes from "./components/Notes/Notes";
import Note from "./components/Notes/Note";
import Todos from "./components/Todos/Todos";
import Todo from "./components/Todos/Todo";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import PageNotFoundError from "./components/Error/PageNotFoundError";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </div>
  );
}

export default App;
