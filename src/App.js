import React from "react";
import "./App.css";
import Todo from "./component/todo";
// import Form from "./components/Form";
// import FilterButton from "./components/FilterButton";

function App(props) {
  // const taskList = props.tasks?.map((task) => task.name);
  
  // const taskList = props.tasks.map((task) => <Todo />);

  //  const taskList = props.tasks.map((task) => (
  //   <Todo id={task.id} name={task.name} completed={task.completed} />
  // ));

  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  )
);

  return (
    <>
    {/* <div className="todoapp stack-large">
    <h1>TodoMatic</h1>
    <Form />
    <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
    </div>
    <h2 id="list-heading">3 tasks remaining</h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList}
    </ul>
  </div> */}
  
  <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
     {taskList}
        {/* <Todo name="Eat"  completed={true} id="todo-0" />
        <Todo name="Sleep" completed={false} id="todo-1"/>
        <Todo name="Repeat" completed={false} id="todo-2"/> */}
      </ul>
    </div>
</>
      );
    }
    
    export default App;
    





    














// import React from "react";
// import Form from "./components/Form";
// import FilterButton from "./components/FilterButton";
// import Todo from "./components/todo";

// function App(props) {
//   const taskList = props.tasks.map((task) => (
//     <Todo
//         id={task.id}
//         name={task.name}
//         completed={task.completed}
//         key={task.id}
//       />
//     )
//   );
//   return (
//     <div className="todoapp stack-large">
//       <h1>TodoMatic</h1>
//       <Form />
//       <div className="filters btn-group stack-exception">
//         <FilterButton />
//         <FilterButton />
//         <FilterButton />
//       </div>
//       <h2 id="list-heading">3 tasks remaining</h2>
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading"
//       >
//         {taskList}
//       </ul>
//     </div>
//   );
// }

// export default App;
