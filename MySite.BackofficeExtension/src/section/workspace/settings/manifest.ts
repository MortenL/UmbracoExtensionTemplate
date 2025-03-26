import { ManifestWorkspace } from '@umbraco-cms/backoffice/workspace';
import { MySiteSettingsWorkspaceElement } from './settings-workspace.element';

const workspace: ManifestWorkspace = {
  type: 'workspace',
  alias: 'MySite.Workspace.Settings',
  name: 'Settings Workspace',
  element: MySiteSettingsWorkspaceElement,
  meta: {
    entityType: 'settings'
  }
};

export const manifests = [workspace];
