import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', async () => {
	render(<App />);

	// find element with role of button and text of 'change to blue'
	const colorButton = await screen.findByRole('button', { name: 'Change to blue' });

	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

	// click button
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

	// expect button text to change.
	expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', async () => {
	render(<App />);

	//check the button starts out enabled
	const colorButton = await screen.findByRole('button', { name: 'Change to blue' });
	expect(colorButton).toBeEnabled();

	const checkbox = await screen.findByRole('checkbox');
	expect(checkbox).not.toBeChecked();

	//check the checkbox starts unchecked
});

test('checkbox disables button on first click and enables on second click', async () => {
	render(<App />);

	//get checkbox
	const checkbox = await screen.findByRole('checkbox', { name: 'Disable button' });

	// get button
	const colorButton = await screen.findByRole('button', { name: 'Change to blue' });

	//click checkbox
	fireEvent.click(checkbox);

	//check to see if button is disabled
	expect(colorButton).toBeDisabled();

	//click checkbox
	fireEvent.click(checkbox);

	//check to see if button is disabled
	expect(colorButton).toBeEnabled();
});

test('button turns gray when disabled', async () => {
	render(<App />);

	//get button
	const colorButton = await screen.findByRole('button', { name: 'Change to blue' });

	//get checkbox
	const checkbox = await screen.findByRole('checkbox', { name: 'Disable button' });

	//click checkbox
	fireEvent.click(checkbox);

	//check button color is gray
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	//click checkbox
	fireEvent.click(checkbox);

	//check button color is red
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

	// click button to turn blue
	fireEvent.click(colorButton);

	// check for button to be blue
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

	//click checkbox
	fireEvent.click(checkbox);

	//check if button is disabled
	expect(colorButton).toBeDisabled();

	//check if button is gray
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	//click the checkbox to enable
	fireEvent.click(checkbox);

	expect(colorButton).toBeEnabled();
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});

	test('Works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});

	test('Works for multiple inner capital letters', () => {});
	expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
});
