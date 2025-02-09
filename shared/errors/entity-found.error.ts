export class EntityFoundError extends Error {
  public constructor(EntityName: string, entityValue: string | number) {
    super(`${EntityName} with value: ${entityValue} was found in database`);
  }
}
