export class CompoundEntityNotFoundError extends Error {
  public constructor(
    leftSideEntityName: string,
    rightSideEntityName: string,
    leftSideValue: string,
    rightSideEValue: string,
  ) {
    super(
      `Compound ${leftSideEntityName}-${rightSideEntityName} with value: [${leftSideValue} / ${rightSideEValue}] was not found in database`,
    );
  }
}
