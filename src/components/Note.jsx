import './Note.css'
import classNames from 'classnames'
import {useStore} from "../store.js";
import trash from '../assets/trash.svg'

export default function Note({title}) {
  const task = useStore(store =>
      store.tasks.find(task => task.title === title)
  )

  const deleteTask = useStore(store => store.deleteTask)
  const setDraggedTask = useStore(store => store.setDraggedTask)

  return (
      <div
          className='task'
          draggable
          onDragStart={() => setDraggedTask(task.title)}
      >
        <div>{task.title}</div>
        <div className='bottomWrapper'>
          <div>
            <img
                onClick={() => deleteTask(task.title)}
                src={trash}
                alt='delete'
            />
          </div>
          <div className={classNames('status', task.state)}>{task.state}</div>
        </div>
      </div>
  )
}
