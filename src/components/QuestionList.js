import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, deleteQuestion, updateAnswer }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => {
          return <QuestionItem key={question.id} {...question} question={question} deleteQuestion={deleteQuestion} changeAnswer={updateAnswer}/>
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
