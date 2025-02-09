import { ActionError } from './action-error.enum';

export class EntityError extends Error {
  public constructor(entityName: string, action: ActionError) {
    super(`${entityName} error occurred while ${action} entity`);
  }
}
