import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

function Todos(props) {
  /** Dispatches action for fetching todos from the store */
  useEffect(() => {
    props.fetchTodos();
  }, [props]);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {props.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = {
  fetchTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
