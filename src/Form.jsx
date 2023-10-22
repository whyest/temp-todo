import { useState } from 'react'

const Form = ({ addItem }) => {
	const [newItemName, setNewItemName] = useState('')
	const [active, setActive] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		if (!newItemName) {
			return
		}
		addItem(newItemName)
		setNewItemName('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<h4>список задач</h4>
			{active ? (
				''
			) : (
				<button
					type='button'
					className='btn center'
					onClick={() => setActive(!active)}
				>
					добавить заметку
				</button>
			)}
			{active && (
				<div className='form-control'>
					<input
						type='text'
						className='form-input'
						value={newItemName}
						onChange={event => setNewItemName(event.target.value)}
					/>
					<button type='submit' className='btn'>
						добавить заметку
					</button>
				</div>
			)}
		</form>
	)
}
export default Form
