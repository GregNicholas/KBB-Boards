import "./BoardInput.css"

const BoardInput = ({ newTaskField, updateNewTaskField, createTask }) => {
    return (
      <section>
        <form type="submit" onClick={createTask}>
          <input
            id="create-task-input"
            type="text"
            placeholder="New task name"
            value={newTaskField}
            onChange={updateNewTaskField}
          />
          <button type="submit" class="btn-create" disabled={!newTaskField}>
            Create task
          </button>
        </form>
      </section>
    );
  };
  
  export default BoardInput;
  