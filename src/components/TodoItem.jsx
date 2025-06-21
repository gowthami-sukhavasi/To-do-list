import crossLogo from "../assets/icon-cross.svg";

export default function TodoItem({ item, handleCheck, deleteItem }) {
  return (
    <div className="listitem">
      <input
        type="checkbox"
        className="input-check"
        checked={item.isChecked}
        onChange={() => handleCheck(item.id)}
        name={`todo-${item.id}`}
        aria-label={`todo-${item.id}`}
      />

      <div className="list-body">
        <span className={["item", item.isChecked && "check"].join(" ")}>
          {item.task}
        </span>
        <img
          src={crossLogo}
          alt="Delete task"
          role="button"
          onClick={() => deleteItem(item.id)}
        />
      </div>
    </div>
  );
}
