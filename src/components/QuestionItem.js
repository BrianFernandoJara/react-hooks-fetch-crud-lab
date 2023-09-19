import React from "react";

function QuestionItem({ id, prompt, answers, correctIndex, question, deleteQuestion, changeAnswer}) {
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  
  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method:"DELETE"
    }).then(resp => resp.json())
    .then(() => deleteQuestion(question))
  }

  function updateAnswer(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        correctIndex: parseInt(e.target.value)
      })
    })
    .then(resp => resp.json())
    .then(updatedQuestion => changeAnswer(updatedQuestion))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updateAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
