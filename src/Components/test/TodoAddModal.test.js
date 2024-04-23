import { render, screen, fireEvent } from '@testing-library/react';
import { ColorThemeProvider } from '../../Context/ColorThemeContext';
import TodoAddModal from '../TodoAddModal';

describe('<TodoAddModal>', () => {
  it('새로운 일정을 등록하면 Props로 전달된 함수가 호출되고, 폼이 리셋됩니다.', () => {
    const closeModal = jest.fn();
    const addSchedule = jest.fn();
    render(
      <TodoAddModal
        date={new Date()}
        open={true}
        closeModal={closeModal}
        schedule={{}}
        addSchedule={addSchedule}
      />,
      {
        wrapper: ColorThemeProvider,
      }
    );

    const titleInput = screen.getByPlaceholderText(/title/i);
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    const submitBtn = screen.getByRole('button', {
      name: /SUBMIT/i,
    });

    fireEvent.change(titleInput, { target: { value: 'todo' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'todo description' },
    });
    fireEvent.click(submitBtn);

    expect(closeModal).toHaveBeenCalledTimes(1);
    expect(addSchedule).toHaveBeenCalledTimes(1);

    expect(titleInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });
});
