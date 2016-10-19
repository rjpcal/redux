import React, { PropTypes } from 'react'

const Todo = ({ theid, prio, onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
	textDecoration: completed ? 'line-through' : 'none',
	fontWeight: completed ? 'normal' : 'bold'
    }}
  >
	{text} [id={theid} prio={prio} {completed ? ' completed' : ' active'}]
  </li>
)

Todo.propTypes = {
    theid: PropTypes.number.isRequired,
    prio: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
