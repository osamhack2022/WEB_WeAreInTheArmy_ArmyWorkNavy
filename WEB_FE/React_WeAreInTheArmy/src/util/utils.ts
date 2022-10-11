import { Accept } from 'src/type';

export const acceptConverter = (accept: Accept): string => {
  switch (accept) {
    case Accept.Pending:
      return '보류';
    case Accept.Cancel:
      return '거부';
    case Accept.Accept:
      return '수락';
    default:
      return 'Error';
  }
};
