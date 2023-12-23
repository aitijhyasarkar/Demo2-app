import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  AppComponent    : { comp: StaticWebPage },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
