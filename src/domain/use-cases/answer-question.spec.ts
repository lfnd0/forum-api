import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    authorId: "9978f830-9ea8-4ded-9e8a-de9048fd9e9a",
    questionId: "b68eeb14-cc85-4f4c-8943-5203034d1d05",
    content: "new answer",
  });

  expect(answer.content).toEqual("new answer");
});
