import React, { useState } from 'react'
import data from './data.js'
import SingleQuestion from './Question'

const App1 = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3 id="titrefaq">Vos Questions les plus récurrente</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App1