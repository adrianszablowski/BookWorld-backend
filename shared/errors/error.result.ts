import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CompoundEntityFoundError } from './compound-entity-found.error';
import { CompoundEntityNotFoundError } from './compound-entity-not-found.error';
import { EntityFoundError } from './entity-found.error';
import { EntityNotFoundError } from './entity-not-found.error';
import { EntityError } from './entity.error';
import { RestoreDuplicateError } from './restore-duplicate.error';
import { ValueIsOverLimitError } from './value-over-limit.error';

export function errorResult(
  error: Error,
  res: Response,
): Response<any, Record<string, any>> {
  const conflict = HttpStatus.CONFLICT;
  const notFound = HttpStatus.NOT_FOUND;
  const internalServerError = HttpStatus.INTERNAL_SERVER_ERROR;

  switch (error.constructor) {
    case EntityFoundError:
    case CompoundEntityFoundError:
    case RestoreDuplicateError:
      return res.status(conflict).json({
        message: [error.message],
        error: 'Bad Request',
        statusCode: conflict,
      });
    case EntityNotFoundError:
    case ValueIsOverLimitError:
    case CompoundEntityNotFoundError:
      return res.status(notFound).json({
        message: [error.message],
        error: 'Bad Request',
        statusCode: notFound,
      });
    case EntityError:
      return res.status(internalServerError).json({
        message: [error.message],
        error: 'Bad Request',
        statusCode: internalServerError,
      });
    default:
      return res.status(internalServerError).json({
        message: ['Unexpected error occurred'],
        error: 'Bad Request',
        statusCode: internalServerError,
      });
  }
}
