import { ApplicationError } from '@/protocols';

export function formatError(): ApplicationError {
  return {
    name: 'FormatError',
    message: 'Invalid format!',
  };
}
