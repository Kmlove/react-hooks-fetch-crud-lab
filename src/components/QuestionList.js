import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onQuestionDelete, updateCorrectIndex}) {
  
  const questionItemList = questions.map(question => {
    return (
      <QuestionItem 
        key={question.id}
        question={question}
        onQuestionDelete={onQuestionDelete}
        updateCorrectIndex={updateCorrectIndex}
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
