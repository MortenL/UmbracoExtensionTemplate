import { ManifestDashboard } from '@umbraco-cms/backoffice/dashboard';
import { MySiteDashboardElement } from './dashboard.element';

export const dashboardManifest: ManifestDashboard = {
  type: 'dashboard',
  alias: 'MySite.Dashboard',
  name: 'MySite Dashboard',
  element: MySiteDashboardElement,
  weight: 30,
  meta: {
    label: 'MySite Dashboard',
    pathname: 'mysite-dashboard'
  },
  conditions: [
    {
      alias: 'Umb.Condition.SectionAlias',
      match: 'Umb.Section.Content'
    }
  ]
};
