import React, { FC, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputSet } from './InputSet';

const TestComponent: FC<{ changeFn: (v: string) => void, initVal?: string }> = ({ changeFn, initVal = '' }) => {
  const [value, setValue] = useState(() => initVal);
  const onChange = (v: string) => {
    changeFn(v);
    setValue(v);
  };
  return <InputSet value={value} onChange={onChange} />;
};

describe('InputSet component', () => {
  it('should render with correct label and input value', () => {
    const value = 'Test Value';
    const onChange = jest.fn();

    render(<TestComponent initVal={value} changeFn={onChange} />);

    const inputElement: HTMLInputElement = screen.getByRole('textbox', { name: 'input label' });

    expect(inputElement.value).toBe(value);
  });

  it('should call onChange with the updated input value', async () => {
    const onChange = jest.fn();

    render(<TestComponent changeFn={onChange} />);

    const inputElement = screen.getByRole('textbox', { name: 'input label' });
    const newValue = 'Updated Value';

    userEvent.type(inputElement, newValue);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(newValue);
    });
  });
});
