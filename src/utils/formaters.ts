import { NumberFormat } from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const currencyFormat = (amount: number) => {
  const formatter = new NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const UNICODE_NON_BREAKING_SPACE = String.fromCharCode(160);
  const USUAL_SPACE = String.fromCharCode(32);

  return formatter
    .format(amount)
    .replace(UNICODE_NON_BREAKING_SPACE, USUAL_SPACE);
};
