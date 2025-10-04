import { expect, test } from "vitest";
import { AnswersRepository } from "../repositories/answers";
import { AnswerQuestionUseCase } from "./answer-question";

const answersRepository: AnswersRepository = {
  create: async () => {},
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(answersRepository);
  const answer = await answerQuestion.execute({
    authorId: "9978f830-9ea8-4ded-9e8a-de9048fd9e9a",
    questionId: "b68eeb14-cc85-4f4c-8943-5203034d1d05",
    content: "new answer",
  });

  expect(answer.content).toEqual("new answer");
});
