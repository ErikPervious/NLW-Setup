interface HabitProps {
  completed: number;
}

export function Habit({completed}: HabitProps) {
  return (
    <div className="w-auto h-auto bg-gray-800 text-white text-center p-4 mt-4">
      habit: {completed}
    </div>
  )
}