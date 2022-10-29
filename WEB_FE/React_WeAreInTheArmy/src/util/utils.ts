import { Accept } from 'src/type';
import { client } from './client';

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

export function setAuthroizationToken(token: string) {
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common['Authoization'];
  }
}

export function isoStringToYYYYMMDD(isoString: string) {
  return isoString.substring(0, 10);
}
