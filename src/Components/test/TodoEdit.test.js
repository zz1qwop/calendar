import { render, screen, fireEvent } from '@testing-library/react';
import TodoEdit from '../TodoEdit';
import { ColorThemeProvider } from '../../Context/ColorThemeContext';

describe('<TodoEdit>', () => {
  it('일정을 수정하고 확인 버튼을 누르면 Props로 받은 일정 관련 함수들이 실행됩니다.', () => {
    const todo = {
      color: 'pink',
      title: 'todo1',
      description: 'todo description',
      time: '09:00',
    };
    const updateTodoItem = jest.fn();
    const handleTodo = jest.fn();
    const handleEditFalse = jest.fn();
    render(
      <TodoEdit
        todo={todo}
        updateTodoItem={updateTodoItem}
        handleTodo={handleTodo}
        handleEditFalse={handleEditFalse}
      />,
      {
        wrapper: ColorThemeProvider,
      }
    );

    const titleInput = screen.getByPlaceholderText(/title/i);
    const submitBtn = screen.getByRole('button', {
      name: /OK/i,
    });

    fireEvent.change(titleInput, { target: { value: 'todo-modify' } });
    fireEvent.click(submitBtn);

    expect(updateTodoItem).toHaveBeenCalledTimes(1);
    expect(handleTodo).toHaveBeenCalledTimes(1);
    expect(handleEditFalse).toHaveBeenCalledTimes(1);
  });
});
