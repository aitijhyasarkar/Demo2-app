import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  SamplePage: {
    Page        : { appComponent: "AppComponent", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "SamplePage"
  },
  defaultAppRoute: {
    Page        : { appComponent: "SamplePage" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  }, 
  ...modulesRoutesRegistry
};