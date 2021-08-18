import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', async () => {
  render(< App />)

  // find element with role of button and text of 'change to blue'
  const colorButton = await screen.findByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  // expect button text to change.
  expect(colorButton.textContent).toBe('Change to red')

});


test('button turns blue when clicked', () => {
  
});


