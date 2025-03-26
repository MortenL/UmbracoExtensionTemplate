import { ManifestEntityAction } from "@umbraco-cms/backoffice/entity-action";
import { ShowDetailsEntityAction } from "./show-details.api.js";
import { ShowStatsEntityAction } from "./show-stats.api.js";

// Entity action for showing details
export const showDetailsManifest: ManifestEntityAction = {
  type: 'entityAction',
  alias: 'MySite.EntityAction.ShowDetails',
  name: 'Show Details',
  api: ShowDetailsEntityAction,
  weight: 10,
  forEntityTypes: ['mysite-item'],
  meta: {
    label: 'Show Details',
    icon: 'icon-info',
    entityType: 'mysite-item',
    repositoryAlias: 'MySite.ItemRepository'
  }
};

// Entity action for showing stats
export const showStatsManifest: ManifestEntityAction = {
  type: 'entityAction',
  alias: 'MySite.EntityAction.ShowStats',
  name: 'Show Stats',
  api: ShowStatsEntityAction,
  weight: 20,
  forEntityTypes: ['mysite-item'],
  meta: {
    label: 'Show Stats',
    icon: 'icon-chart-line',
    entityType: 'mysite-item',
    repositoryAlias: 'MySite.ItemRepository'
  }
};
