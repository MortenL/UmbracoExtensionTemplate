import { manifests as overviewManifests } from './overview/manifest';
import { manifests as itemsManifests } from './items/manifest';
import { manifests as settingsManifests } from './settings/manifest';

export const workspaceManifests = [
  ...overviewManifests,
  ...itemsManifests,
  ...settingsManifests
];
