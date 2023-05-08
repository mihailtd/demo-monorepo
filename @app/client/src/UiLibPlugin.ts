import components from '@mihailtd/ui-lib';

// alternatively if the library does not export a plugin, I could create one
const UiLibPlugin = {
  install(app: any) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
  },
};

export default UiLibPlugin;
