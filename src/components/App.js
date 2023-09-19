import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [listOfQuestions, setListOfQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
     .then(questions => setListOfQuestions(questions))
  }, [])

  function handleAddingQuestion(newQuestion) {
    setListOfQuestions([...listOfQuestions, newQuestion])
  }

  function handleDeleting(deletedQuestion){
    setListOfQuestions(listOfQuestions.filter(question => {
      if(question.id === deletedQuestion.id){
        return false
      }else return true
    }))
  }
  function handleUpdate(updatedQuestion){
    const updateQuestion = listOfQuestions.map(question => {
      if(question.id === updatedQuestion.id){
        return updatedQuestion
      }else return question;
    })
    setListOfQuestions(updateQuestion)
    }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm addQuestion={handleAddingQuestion}/> :
        <QuestionList
         questions={listOfQuestions}
         deleteQuestion={handleDeleting}
         updateAnswer={handleUpdate}
       />}
    </main>
  );
}

export default App;
