export class EntityNotFoundError extends Error {
  public constructor(EntityName: string, entityValue: string) {
    super(`${EntityName} with value: ${entityValue} was not found in database`);
  }
}
