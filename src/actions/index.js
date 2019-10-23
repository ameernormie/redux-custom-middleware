export const fetchTodos = () => {
  return httpAction({
    type: "TODOS",
    endpoint: "https://jsonplaceholder.typicode.com/todos"
  });
};

function httpAction(action) {
  const httpActionTemplate = {
    type: "",
    endpoint: null,
    verb: "GET",
    payload: null,
    headers: []
  };

  return {
    HTTP_ACTION: Object.assign({}, httpActionTemplate, action)
  };
}
