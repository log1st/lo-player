import { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator('UI: Component', {
    description: 'UI Component generator',
    prompts: [],
    actions: [],
  });
}
