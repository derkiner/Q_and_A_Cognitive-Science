import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


// Setting state values via data
// Map to iterate questions
// SingleQuestion Prop - question.id
// Spread operator to pass the rest of the properties
function App() {
  const [ questions, setQuestions ] = useState(data);


  return (
    <main>
      <div className="container">
        <h3> Cognitive Science Exam Preparation Questions</h3>
       
   
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
