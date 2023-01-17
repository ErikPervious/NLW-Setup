import './styles/global.css';

import { Habit } from "./components/Habit"

function App() {
  return (
    <div className="bg-black flex w-auto h-auto">
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
    </div>
  )
}

export default App
