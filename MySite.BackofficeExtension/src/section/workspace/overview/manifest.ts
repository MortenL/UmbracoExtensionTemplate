import { ManifestWorkspace } from '@umbraco-cms/backoffice/workspace';
import { MySiteOverviewWorkspaceElement } from './overview-workspace.element';

const workspace: ManifestWorkspace = {
  type: 'workspace',
  alias: 'MySite.Workspace.Overview',
  name: 'Overview Workspace',
  element: MySiteOverviewWorkspaceElement,
  meta: {
    entityType: 'overview'
  }
};

export const manifests = [workspace];
