import React, { useContext } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import styles from './TodoItem.module.css';
import { ColorThemeContext } from '../Context/ColorThemeContext';

export default function TodoItem({
  todo,
  month,
  deleteTodoItem,
  handleTodo,
  handleEditTrue,
}) {
  const { colorTheme } = useContext(ColorThemeContext);

  const selectedColor =
    todo.color === 'pink'
      ? '#ff8f8f'
      : todo.color === 'yellow'
      ? '#fbde7e'
      : '#8cbc59';
  return (
    <div className={styles.todoBox} data-testid="todoItem">
      <div
        className={styles.titleBox}
        onClick={() => {
          handleTodo(todo);
        }}
      >
        <div
          className={styles.color}
          style={{ backgroundColor: selectedColor }}
        ></div>
        <p className={styles.title}>{todo.title}</p>
      </div>
      <div
        className={`${styles.btnBox} ${
          colorTheme === 'pink'
            ? styles.pink
            : colorTheme === 'yellow'
            ? styles.yellow
            : styles.green
        }`}
      >
        <BsFillPencilFill
          className={styles.edit}
          onClick={() => {
            handleTodo(todo);
            handleEditTrue();
          }}
          data-testid="modify"
        />
        <BsFillTrashFill
          className={styles.delete}
          onClick={() => {
            deleteTodoItem(month, todo.id);
          }}
        />
      </div>
    </div>
  );
}
