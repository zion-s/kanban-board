import "./styles.css";

export default function TaskItem(props) {
  return (
    <div key={props.taskIndex}>
      <span>{props.name}</span>
      <span
        className="arrow"
        onClick={() =>
          props.modifyTask("prev", props.categoryIndex, props.taskIndex)
        }
      >
        {"<-"}
      </span>
      <span
        className="arrow"
        onClick={() =>
          props.modifyTask("next", props.categoryIndex, props.taskIndex)
        }
      >
        {"->"}
      </span>
      <span
        className="deleteButton"
        onClick={() =>
          props.modifyTask("delete", props.categoryIndex, props.taskIndex)
        }
      >
        Delete
      </span>
    </div>
  );
}
