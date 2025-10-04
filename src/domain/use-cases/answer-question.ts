import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers";

interface AnswerQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    authorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId, questionId });

    await this.answerRepository.create(answer);

    return answer;
  }
}
