import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

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
