export default function FilterControls({ isDesktop, filter, setFilter }) {
  const className = isDesktop ? "filter-button-desktop" : "filter-buttons";
  return (
    <div className={className}>
      <span
        role="button"
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </span>
      <span
        role="button"
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </span>
      <span
        role="button"
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </span>
    </div>
  );
}
