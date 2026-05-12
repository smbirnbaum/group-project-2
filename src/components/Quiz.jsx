import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    setLoading(true);
    setErrorMessage("");
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);

    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("No questions found");
      }

      const cleanedQuestions = data.results.map((question) => {
        const answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];

        return {
          question: question.question,
          correctAnswer: question.correct_answer,
          answers: answers.sort(() => Math.random() - 0.5),
        };
      });

      setQuestions(cleanedQuestions);
    } catch (error) {
      console.log("Quiz loading error:", error);
      setErrorMessage("The quiz did not load. Please try again.");
    }

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

  function playAgain() {
    fetchQuestions();
  }

  if (loading) {
    return (
      <section>
        <p>Loading questions...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section>
        <p>{errorMessage}</p>
        <button onClick={fetchQuestions}>Try again</button>
      </section>
    );
  }

  if (isFinished) {
    return (
      <section>
        <h2>Quiz finished!</h2>

        <p>
          Your score: {score} / {questions.length}
        </p>

        <button onClick={playAgain}>Play again</button>
      </section>
    );
  }

  return (
    <section>
      <h2>Question {currentQuestion + 1}</h2>

      <p>
        {currentQuestion + 1} / {questions.length}
      </p>

      <p
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestion].question,
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