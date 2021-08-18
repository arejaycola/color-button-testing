import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const [disabled, setDisabled] = useState(false);

	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

	return (
		<div>
			<button
				disabled={disabled}
				onClick={() => setButtonColor(newButtonColor)}
				style={disabled ? { backgroundColor: 'gray' } : { backgroundColor: buttonColor }}
			>
				Change to {newButtonColor}
			</button>
			<input
				id="disable-button-checkbox"
				type="checkbox"
				defaultChecked={disabled}
				aria-checked={disabled}
				onChange={() => setDisabled(!disabled)}
			/>
			<label htmlFor="disable-button-checkbox">Disable button</label>
		</div>
	);
}

export default App;
