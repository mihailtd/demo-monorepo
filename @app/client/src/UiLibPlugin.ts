import components from '@demo/ui-lib';

const UiLibPlugin = {
  install(app: any) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
  },
};

export default UiLibPlugin;
