export class RestoreDuplicateError extends Error {
  public constructor(EntityName: string, entityValue: string) {
    super(
      `Cannot restore due to an acitve ${EntityName} with unique value: ${entityValue} already exists.`,
    );
  }
}
