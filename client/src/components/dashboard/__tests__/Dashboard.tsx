import React from 'react';
import {
  findByText,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../../../lib/test/test-utils';
import Dashboard from '../Dashboard';

describe('<Dashboard/>', () => {
  let onAdd;
  beforeEach(() => {
    onAdd = jest.fn();
    render(<Dashboard onAdd={onAdd} count={0} />, { initialState: {} });
  });

  test('display Test', () => {
    screen.getByText('Home page');
    screen.getByText('Main');
  });

  test('async toggle test', async () => {
    screen.getByText('OFF');
    fireEvent.click(screen.getByTestId('toggle'));
    const text = await waitFor(() => screen.getByText('ON'));
    expect(text).toHaveTextContent('ON');
  });

  test('async remove test', async () => {
    fireEvent.click(screen.getByTestId('toggle'));
    await waitForElementToBeRemoved(() => screen.getByText('OFF'));
  });

  test('function call test', () => {
    fireEvent.input(screen.getByDisplayValue(0), {
      target: {
        value: '3',
      },
    });

    fireEvent.click(screen.getByText('Add'));

    expect(onAdd).toHaveBeenCalledTimes(1);

    expect(onAdd).toBeCalledWith('3');
  });
});
