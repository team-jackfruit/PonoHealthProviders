import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import NavBarPono from '../components/NavBarPono';
import FooterPono from '../components/FooterPono';
import ListProviderswFilter from '../pages/ListProviderswFilter';
// eslint-disable-next-line import/no-named-as-default
import Faq from '../pages/Faq';
import ResourcesPage from '../pages/Resources';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import EditUser from '../pages/EditUser';
import UserProfile from '../pages/UserProfile';
import CreateUser from '../pages/CreateUser';
import ProviderList from "../pages/ProviderList";

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBarPono />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/list" element={<ListProviderswFilter />} />
          <Route path="/listprovider" element={<ProviderList />} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/edit/:_id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/userprofile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterPono />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
