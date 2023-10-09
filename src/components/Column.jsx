import './Column.css'
import Note from "./Note.jsx";
import {useState} from "react";
import classNames from "classnames";
import {useStore} from "../store.js";
import add from "../assets/add.svg";

export default function Column({state}) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)

  const tasks = useStore(store =>
      store.tasks.filter(task => task.state === state)
  )

  const addTask = useStore(store => store.addTask)
  const setDraggedTask = useStore(store => store.setDraggedTask)
  const draggedTask = useStore(store => store.draggedTask)
  const moveTask = useStore(store => store.moveTask)

  const [isEditing, setIsEditing] = useState(false);
  const [columnTitle, setColumnTitle] = useState('Rename title');

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleChange = (event) => {
    setColumnTitle(event.target.value);
  };

  return <div
      className={classNames('column', {drop: drop})}
      onDragOver={e => {
        setDrop(true)
        e.preventDefault()
      }}
      onDragLeave={e => {
        setDrop(false)
        e.preventDefault()
      }}
      onDrop={e => {
        console.log(draggedTask)
        setDrop(false)
        moveTask(draggedTask, state)
        setDraggedTask(null)
      }}
  >
    <div className='titleWrapper'>
      {isEditing ? (
          <input
              type="text"
              value={columnTitle}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onBlur={() => setIsEditing(false)}
              autoFocus
          />
      ) : (
          <span onDoubleClick={handleDoubleClick}>{columnTitle}</span>
      )}
      <img
          onClick={() => setOpen(true)}
          src={add}
          alt='add new note'
          width='40'
          height='40'
      />
    </div>
    {tasks.map(task => (
        <Note title={task.title} key={task.title}/>
    ))}
    {open && <div className='Modal'>
      <div className='modalContent'>
        <input onChange={e => setText(e.target.value)} value={text}/>
        <button onClick={() => {
          if (text.length !== 0) {
            addTask(text, state)
            setText('')
          }
          setOpen(false);
        }}>
          Submit
        </button>
      </div>
    </div>}
  </div>
}
