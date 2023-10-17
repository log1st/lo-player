import r2wc from '@r2wc/react-to-web-component';
import { kebabCase } from 'lodash';
import { App } from '../containers/App.tsx';

export type RunAppOptions = {
  customElementName?: string;
}

export const registerPlayer = (
  { customElementName = 'player' }: RunAppOptions = {},
) => {
  const app = r2wc(App, {
    shadow: 'closed',
  });

  const element = kebabCase(`lo-${customElementName}`);
  customElements.define(element, app);

  return element;
};
