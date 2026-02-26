import React, { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const selectExercise = (exercise) => {
    setSelectedExercise(exercise);
  }

  const exercises = [
    { name: "Squat", type: "repetition" },
    { name: "Deadlift", type: "repetition" },
    { name: "Bicep Curl", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "duration" },
    { name: "Cycling", type: "duration" },
  ];

  let screen = (
    <div>
      <h1>Time to Sweat!</h1>

      {exercises.map((exercise) => (
        <button
          key={exercise.name}
          onClick={() => selectExercise(exercise)}
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = <RepetitionExercise name={selectedExercise.name} />
    } else {
      screen = <DurationExercise name={selectedExercise.name} />
    }
  }

  return <div className="App">{screen}</div>;
}

export default App;