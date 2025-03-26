const MENU_ALIAS = 'MySite.MySidebarMenu';

export const menuManifest = {
  type: "menu",
  alias: MENU_ALIAS,
  name: "MySite Menu",
  weight: 0
};

export const overviewMenuItem = {
  type: "menuItem",
  alias: `${MENU_ALIAS}.MenuItem.Overview`,
  name: "Overview Menu Item",
  weight: 30,
  meta: {
    label: "Overview",
    icon: "icon-home",
    menus: [MENU_ALIAS],
    entityType: "overview"
  }
};

export const itemsMenuItem = {
  type: "menuItem",
  alias: `${MENU_ALIAS}.MenuItem.Items`,
  name: "Items Menu Item",
  weight: 20,
  meta: {
    label: "Items",
    icon: "icon-list",
    menus: [MENU_ALIAS],
    entityType: "items"
  }
};

export const settingsMenuItem = {
  type: "menuItem",
  alias: `${MENU_ALIAS}.MenuItem.Settings`,
  name: "Settings Menu Item",
  weight: 10,
  meta: {
    label: "Settings",
    icon: "icon-settings",
    menus: [MENU_ALIAS],
    entityType: "settings"
  }
};

export const sidebarMenuManifests = [
  menuManifest,
  overviewMenuItem,
  itemsMenuItem,
  settingsMenuItem
];
