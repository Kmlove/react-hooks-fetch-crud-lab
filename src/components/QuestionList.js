import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions}) {
  
  const questionItemList = questions.map(question => {
    return (
      <QuestionItem 
        key={question.id}
        question={question}
      />
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItemList}</ul>
    </section>
  );
}

export default QuestionList;
