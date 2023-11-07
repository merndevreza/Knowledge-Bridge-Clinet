import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivateRoutes = ({children}) => {
   const {currentUser,loading}=useContext(AuthContext)
   const location = useLocation()
   if (loading) {
      return (
        <div className="relative top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    }
   if (currentUser) {
      return children;
   }
   return (
      <Navigate state={location.pathname} to="/login"></Navigate>
   );
};

PrivateRoutes.propTypes={
   children: PropTypes.node,
}
export default PrivateRoutes;