import { formatDistance } from 'date-fns';
import locales from 'date-fns/locale';

export const formatDate = (
  date?: Date | null,
  locale: keyof typeof locales = 'enUS',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  },
) => (date ? new Intl.DateTimeFormat(locale, options).format(date) : '');

export const formatAgo = (
  date?: Date | null,
  locale: keyof typeof locales = 'enUS',
  options: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
  } = {},
) => (date
  ? formatDistance(date, new Date(), {
    ...options,
    locale: locales[locale] || locales.enUS,
  })
  : '');
