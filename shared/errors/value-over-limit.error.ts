export class ValueIsOverLimitError extends Error {
  public constructor(entityValue: number) {
    super(`Value ${entityValue} is over limit`);
  }
}
