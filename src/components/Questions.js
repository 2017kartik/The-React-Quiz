import Options from "./Options";

export default function Questions({ questions, dispatch, answer }) {
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </>
  );
}