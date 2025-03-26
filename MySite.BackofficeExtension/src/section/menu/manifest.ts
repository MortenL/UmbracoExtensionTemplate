import { ManifestMenuItem } from "@umbraco-cms/backoffice/menu";

const MENU_ALIAS = 'MySite.MenuItem';

// Menu item for the section sidebar
export const menuItemManifest: ManifestMenuItem = {
  type: 'menuItem',
  alias: MENU_ALIAS,
  name: 'MySite Menu Item',
  meta: {
    label: 'Items',
    icon: 'icon-document',
    menus: [MENU_ALIAS]
  },
  conditions: [
    {
      alias: 'Umb.Condition.SectionAlias',
      match: 'MySite.Section'
    }
  ]
};

// Collection the menu manifests
export const menuManifests = [menuItemManifest];
