import { ManifestSectionSidebarApp } from "@umbraco-cms/backoffice/section";

export const sectionSidebarManifest: ManifestSectionSidebarApp = {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "MySite.SectionSidebarApp.MyMenu",
    name: "My Menu Section Sidebar App",
    meta: {
     label: "My Sidebar Menu",
     menu: "MySite.MySidebarMenu"
    },
    conditions: [
     {
      alias: "Umb.Condition.SectionAlias",
      match: "MySite.Section"
     }
    ]
};