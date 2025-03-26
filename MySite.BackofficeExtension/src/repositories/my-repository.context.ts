import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import { MyRepository, MySiteItem } from './my-repository';

export class MyRepositoryContext {
  #repository: MyRepository;
  
  constructor(host: UmbControllerHostElement) {
    this.#repository = new MyRepository(host);
  }
  
  async getItems(): Promise<Array<MySiteItem>> {
    return this.#repository.getItems();
  }
  
  async getItem(id: string): Promise<MySiteItem | null> {
    return this.#repository.getItem(id);
  }
}

export const MY_REPOSITORY_CONTEXT = new UmbContextToken<MyRepositoryContext>('MySite.ItemRepositoryContext');
