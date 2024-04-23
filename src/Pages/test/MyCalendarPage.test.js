import { render, screen, fireEvent } from '@testing-library/react';
import MyCalendarPage from '../MyCalendarPage';
import { ColorThemeProvider } from '../../Context/ColorThemeContext';

describe('<MyCalendarPage>', () => {
  it('일정을 수정했을 경우에도 일정 array 순서가 유지되어야 한다.', () => {
    render(<MyCalendarPage />, {
      wrapper: ColorThemeProvider,
    });

    //1. 일정 등록
    const addBtn = screen.getByRole('button', {
      name: /addBtn/i,
    });
    const titleInput = screen.getByPlaceholderText(/title/i);
    const submitBtn = screen.getByRole('button', {
      name: /SUBMIT/i,
    });

    const todoList = ['todo1', 'todo2'];
    for (let todo of todoList) {
      fireEvent.click(addBtn);
      fireEvent.change(titleInput, { target: { value: todo } });
      fireEvent.click(submitBtn);
    }

    let todoItems = screen.queryAllByTestId('todoItem');
    expect(todoItems.length).toBe(2);

    //2. 일정 수정
    const modifyBtn = screen.queryAllByTestId('modify')[0];
    fireEvent.click(modifyBtn);

    const modifyTitleInput = screen.getByPlaceholderText(/title edit/i);
    expect(modifyTitleInput.value).toBe(todoList[0]);

    const editSubmitBtn = screen.getByRole('button', {
      name: /OK/i,
    });
    fireEvent.click(editSubmitBtn);

    const closeDetail = screen.getByTestId('closeDetail');
    fireEvent.click(closeDetail);

    const newTodoItems = screen.queryAllByTestId('todoItem');
    expect(newTodoItems.length).toBe(2);

    //3. 최종 순서 확인
    const items = screen.getAllByText(/todo/i);
    expect(items[0].innerHTML).toBe(todoList[0]);
  });
});
