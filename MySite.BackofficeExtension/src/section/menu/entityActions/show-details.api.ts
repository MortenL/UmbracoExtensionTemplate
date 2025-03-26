import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import type { MyRepository } from "../../../repositories/my-repository";

// Simple class to handle the entity action
export class ShowDetailsEntityAction extends UmbEntityActionBase<MyRepository> {
  constructor(host: UmbControllerHostElement, repositoryAlias: string, entityId: string) {
    // Create a proper args object with all required properties including meta
    const args = {
      entityType: 'mysite-item',
      unique: entityId,
      repositoryAlias: repositoryAlias,
      meta: {
        label: 'Show Details',
        icon: 'icon-info'
      }
    } as any; // Use type assertion to bypass the type checking
    
    super(host, args);
  }
  
  async getHref(): Promise<string> {
    // Use args.unique instead of this.entityId
    return `/section/mysite-section/item-details/${this.args.unique}`;
  }
}
