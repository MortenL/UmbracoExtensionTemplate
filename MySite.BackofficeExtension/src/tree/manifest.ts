import { MySiteTreeViewElement } from './tree-view.element';

export const treeViewManifest = {
  type: 'treeView',
  alias: 'MySite.TreeView',
  name: 'MySite Tree View',
  element: MySiteTreeViewElement,
  meta: {
    label: 'MySite Items',
    icon: 'icon-list',
    pathname: 'items'
  },
  conditions: [
    {
      alias: 'Umb.Condition.SectionAlias',
      match: 'MySite.Section'
    }
  ]
};
