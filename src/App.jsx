import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import FilterControls from "./components/FilterControls";

let id = 0;

const INITIALDATA = [
  { id: id++, task: "Complete online JavaScript course", isChecked: false },
  { id: id++, task: "Jog around the park 3x", isChecked: false },
  { id: id++, task: "10 minutes meditation", isChecked: false },
  { id: id++, task: "Read for 1 hour", isChecked: false },
  { id: id++, task: "Pick up groceries", isChecked: false },
  { id: id++, task: "Complete Todo App on Frontend Mentor", isChecked: false },
];

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(INITIALDATA);
  const [filter, setFilter] = useState("all"); // 'all' | 'active' | 'completed'
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const addTodo = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      const newItem = {
        id: id++,
        task: inputText.trim(),
        isChecked: false,
      };
      setList((prev) => [...prev, newItem]);
      setInputText("");
    }
  };

  const deleteItem = (idToDelete) => {
    setList((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const toggleCheck = (idToToggle) => {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === idToToggle) {
          return { ...item, isChecked: !item.isChecked };
        } else return item;
      })
    );
  };

  const clearCompleted = () => {
    setList((prev) => prev.filter((item) => !item.isChecked));
  };

  const filteredList = list.filter((item) => {
    if (filter === "active") return !item.isChecked;
    if (filter === "completed") return item.isChecked;
    return true;
  });

  const itemsLeft = list.filter((item) => !item.isChecked).length;

  return (
    <main className="container">
      <div className="header-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <input
          name="newItem"
          className="header-input"
          type="text"
          placeholder="Create a new Todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={addTodo}
        ></input>
      </div>

      <div className="list-item-container">
        {filteredList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            handleCheck={toggleCheck}
          />
        ))}
        <div className="list-options">
          <span>{itemsLeft} items left</span>
          <FilterControls
            isDesktop={true}
            filter={filter}
            setFilter={setFilter}
          />
          <span role="button" onClick={clearCompleted} className="clear-button">
            Clear completed
          </span>
        </div>
      </div>
      <FilterControls isDesktop={false} filter={filter} setFilter={setFilter} />
    </main>
  );
}

export default App;
