import React, { useContext } from 'react';
import { Navigate, Route, } from 'react-router-dom';
import { userContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
            
        )
      }
    />
    );
};

export default PrivateRoute;