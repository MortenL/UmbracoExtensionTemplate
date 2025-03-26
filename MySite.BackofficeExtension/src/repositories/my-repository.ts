import { UmbRepositoryBase } from '@umbraco-cms/backoffice/repository';
import { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';

// Define the item interface
export interface MySiteItem {
  id: string;
  name: string;
  description?: string;
  createDate: string;
}

// Repository implementation
export class MyRepository extends UmbRepositoryBase {
  constructor(host: UmbControllerHostElement) {
    super(host, 'MySite.ItemRepository');
  }
  
  // Method to get all items (for tree display)
  async getItems(): Promise<Array<MySiteItem>> {
    // In a real implementation, this would fetch from an API
    // For demo purposes, we'll return mock data
    return [
      {
        id: 'item-1',
        name: 'Item 1',
        description: 'This is the first item',
        createDate: new Date().toISOString()
      },
      {
        id: 'item-2',
        name: 'Item 2',
        description: 'This is the second item',
        createDate: new Date().toISOString()
      },
      {
        id: 'item-3',
        name: 'Item 3',
        description: 'This is the third item',
        createDate: new Date().toISOString()
      }
    ];
  }
  
  // Method to get a specific item by ID
  async getItem(id: string): Promise<MySiteItem | null> {
    const items = await this.getItems();
    return items.find(item => item.id === id) || null;
  }
}
