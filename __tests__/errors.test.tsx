import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { test, expect } from '@jest/globals';
import App from '../App';

test('User will see errors for incorrect credentials', async () => {
  render(<App />);

  expect(
    screen.getByRole('header', { name: 'Sign in to Example App' })
  ).toBeTruthy();

  fireEvent.changeText(screen.getByLabelText('Username'), 'admin');
  fireEvent.changeText(screen.getByLabelText('Password'), 'qwerty123');
  fireEvent.press(screen.getByRole('button', { name: 'Sign In' }));

  // Hint: you can use custom Jest Native matcher to check text content.
  expect(await screen.findByRole('alert')).toHaveTextContent(
    'Incorrect username or password'
  );

  expect(
    screen.getByRole('header', { name: 'Sign in to Example App' })
  ).toBeTruthy();
  expect(screen.getByLabelText('Username')).toBeTruthy();
  expect(screen.getByLabelText('Password')).toBeTruthy();
});
