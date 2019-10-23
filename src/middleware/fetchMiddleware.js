import Axios from "axios";

/**
 * Acts as a middleware for http calls. Intercepts the http call by checking
 * HTTP_ACTION. If it is an http call makes the api call and dispatches appropriate action in reducers.
 * Otherwise lets the action go to the next reducer
 */
export const fetchMiddleware = store => next => action => {
  if (action["HTTP_ACTION"]) {
    const actionInfo = action["HTTP_ACTION"];
    next({
      type: `${actionInfo.type}_REQUEST`
    });

    Axios({
      method: actionInfo.verb,
      url: actionInfo.endpoint,
      data: actionInfo.payload
    })
      .then(response => {
        return next({
          type: `${actionInfo.type}_RESPONSE`,
          todos: response.data
        });
      })
      .catch(error => {
        return next({
          type: `${actionInfo.type}_ERROR`,
          error: error
        });
      });
  } else {
    return next(action);
  }
};
