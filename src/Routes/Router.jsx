import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AddBook from "../Pages/AddBook/AddBook";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
         path:"/",
         element:<Home></Home>
      },
      {
         path:"/login",
         element:<Login></Login>
      },
      {
         path:"/register",
         element:<Register></Register>
      },
      {
         path:"/all-books",
         element:<AllBooks></AllBooks>
      },
      {
         path:"/borrowed-books",
         element:<BorrowedBooks></BorrowedBooks>
      },
      {
         path:"/add-book",
         element:<AddBook></AddBook>
      },
     ]
   },
 ]);
export default router;