import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

export default function Questions() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={question} />
    </>
  );
}
