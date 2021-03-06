import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie/movie.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import Review from "../review/review.jsx";
import history from "../../history";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Loading} from "../loading/loading.jsx";
import {getLoadingFilmsStatus, getLoadingPromoStatus} from "../../reducer/data/selectors";
import {getLoadingAuthStatus} from "../../reducer/user/selectors";


export const App = ({
  isAuthorizationLoading,
  isFilmsLoading,
  isPromoLoading
}) => {
  return (isAuthorizationLoading || isFilmsLoading || isPromoLoading ? <Loading /> :
    <Router history={history}>
      <Switch>
        <Route exact path="/films/:id" component={MoviePage} />
        <Route exact path="/films/:id/player" component={FullScreenPlayer} />
        <PrivateRoute
          exact
          path="/films/:id/review"
          requiredAuthStatus={AuthorizationStatus.AUTH}
          pathToRedirect={`/login`}
          render={(match) => {
            return <Review match={match} />;
          }}
        />
        <PrivateRoute
          exact
          path="/mylist"
          requiredAuthStatus={AuthorizationStatus.AUTH}
          pathToRedirect={`/login`}
          render={() => {
            return <MyList />;
          }}
        />
        <PrivateRoute
          exact
          path="/login"
          requiredAuthStatus={AuthorizationStatus.NO_AUTH}
          pathToRedirect={`/`}
          render={() => {
            return <SignIn />;
          }}
        />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isAuthorizationLoading: PropTypes.bool.isRequired,
  isFilmsLoading: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizationLoading: getLoadingAuthStatus(state),
  isFilmsLoading: getLoadingFilmsStatus(state),
  isPromoLoading: getLoadingPromoStatus(state),
});

export default connect(mapStateToProps)(App);
