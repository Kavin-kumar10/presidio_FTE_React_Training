import { useEditTodos, useDeleteTodo } from '../api/react-query';

export const Todo = ({ todo }) => {
  const { mutate: editTodo, isLoading: isEditing } = useEditTodos();
  const { mutate: deleteTodo, isLoading: isDeleting } = useDeleteTodo();

  const handleEdit = (updatedTodo) => {
    editTodo(updatedTodo);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => handleEdit({ ...todo, done: e.target.checked })}
        disabled={isEditing}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        onClick={() => handleDelete(todo.id)}
        className="color-danger"
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};
