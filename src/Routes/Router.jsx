import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoutes from "./PrivateRoutes";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-books",
        element: (
          <PrivateRoutes>
            <AllBooks></AllBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoutes>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoutes>
            <AddBook></AddBook>
          </PrivateRoutes>
        ),
      },
      {
         path:"/update-book/:id",
         loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`),
         element:<PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>
      }
    ],
  },
]);
export default router;
