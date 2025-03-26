import { ManifestWorkspace } from '@umbraco-cms/backoffice/workspace';
import { MySiteItemsWorkspaceElement } from './items-workspace.element';

const workspace: ManifestWorkspace = {
  type: 'workspace',
  alias: 'MySite.Workspace.Items',
  name: 'Items Workspace',
  element: MySiteItemsWorkspaceElement,
  meta: {
    entityType: 'items'
  }
};

export const manifests = [workspace];
