export const formatMoney = (
  currency: string,
  locale: string = 'enUS',
  value: number,
  options?: Partial<Intl.NumberFormatOptions>,
) => new Intl.NumberFormat(locale, {
  currency,
  style: 'currency',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  ...options,
}).format(value);
