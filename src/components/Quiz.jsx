import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );

    const data = await response.json();

    const cleanedQuestions = data.results.map((question) => {
      const answers = [
        question.correct_answer,
        ...question.incorrect_answers
      ];

      return {
        question: question.question,
        correctAnswer: question.correct_answer,
        answers: answers.sort(() => Math.random() - 0.5)
      };
    });

    setQuestions(cleanedQuestions);
    setLoading(false);
  }

  function handleAnswerClick(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  }

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (isFinished) {
    return (
      <section>
        <h2>Quiz finished!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </section>
    );
  }

  return (
    <section>
      <h2>Question {currentQuestion + 1}</h2>

      <p
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestion].question
        }}
      ></p>

      <div>
        {questions[currentQuestion].answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswerClick(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        ))}
      </div>

      <p>Score: {score}</p>
    </section>
  );
}

export default Quiz;