"use client";

import { useState } from "react";
import { StartTest } from "./start";
import { EndTest } from "./end";
import { ProgressTest } from "./progress";

export const Test = ({ questions }: { questions: any }) => {
  const [inProgress, setInProgress] = useState(false);
  const [finished, setFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const onStartClick = () => {
    setInProgress(true);
    setFinished(false);
    setUserAnswers([]);
  };

  const onEndClick = () => {
    setInProgress(false);
    setFinished(true);
  };

  return (
    <div className="text-secondary">
      {inProgress ? (
        <ProgressTest
          setAnswers={setUserAnswers}
          questions={questions}
          onEndClick={onEndClick}
        />
      ) : finished ? (
        <EndTest answers={userAnswers} />
      ) : (
        <StartTest onStartClick={onStartClick} />
      )}
    </div>
  );
};
