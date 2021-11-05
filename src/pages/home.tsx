import React from "react"
import Question from "../components/question"
function HomePage() {
  return (
    <div>
      {
        questions.map((question) => <Question text={question.text} />)
      }
    </div>
  )
}
export default HomePage

const questions = [
  {
    "id": 100,
    "text": "¿Como va?",
    "weight": 1
  },
  {
    "id": 101,
    "text": "¿Valora la experiencia?",
    "options": [
      {
        "id": 200,
        "text": "Mala",
        "weight": 0.5
      },
      {
        "id": 201,
        "text": "Buena",
        "weight": 1
      }
    ],
    "weight": 5
  },
  {
    "id": 102,
    "text": "¿Repetirias?",
    "options": [
      {
        "id": 202,
        "text": "Sí",
        "weight": 1
      },
      {
        "id": 203,
        "text": "No",
        "weight": 0
      }
    ],
    "weight": 10
  }
]