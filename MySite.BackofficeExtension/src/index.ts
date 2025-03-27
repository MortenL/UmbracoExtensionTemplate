import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { sectionSidebarManifest } from './section/sidebar/sidebar.manifest';
import { sidebarMenuManifests } from './section/sidebar/sidebar-menu.manifest';
import { dashboardManifest } from './dashboard/manifest';
import { sectionManifest } from './section/section.manifest';
import { menuManifests } from './section/menu/manifest';
import { repositoryManifest } from './repositories/manifest';
import { treeViewManifest } from './tree/manifest';
import { workspaceManifests } from './section/workspace/manifest';

const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Backoffice Extension Entrypoint",
    alias: "MySite.BackofficeExtension.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  },
  sectionManifest,
  sectionSidebarManifest,
  treeViewManifest,
  dashboardManifest,
  repositoryManifest,
  ...menuManifests,
  ...workspaceManifests,
  ...sidebarMenuManifests,
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
  extensionRegistry.registerMany(manifests);
};