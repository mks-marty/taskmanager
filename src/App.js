import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 4th at 3:30pm",
        reminder: true,
    },
    {
      id: 2,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting at School",
      day: "Feb 6th at 1:00pm",
      reminder: true,
    }
])

// delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header /> 
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}/> )
      : ('No Tasks To Show')}
    </div>
  )
}

export default App;
