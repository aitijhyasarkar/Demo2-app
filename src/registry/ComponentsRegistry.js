import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import SamplePage from "../components/SamplePage";
import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  AppComponent    : { comp: StaticWebPage },
  SamplePage      : { comp: SamplePage },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
