import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { MySiteItem } from '../repositories/my-repository';
import { MyRepositoryContext } from '../repositories/my-repository.context';

@customElement('mysite-tree-collection')
export class MySiteTreeCollectionElement extends UmbLitElement {
  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
      }
      .tree-item {
        padding: 8px 16px;
        cursor: pointer;
        border-bottom: 1px solid var(--uui-color-divider);
      }
      .tree-item:hover {
        background-color: var(--uui-color-surface-emphasis);
      }
      .tree-item-name {
        font-weight: 500;
      }
      .tree-item-description {
        font-size: 0.9em;
        color: var(--uui-color-text-alt);
      }
    `
  ];

  @state()
  private _items: Array<MySiteItem> = [];

  #repository?: MyRepositoryContext;

  constructor() {
    super();
    this.consumeContext('repository', (repository) => {
      this.#repository = repository as MyRepositoryContext;
      this.#loadItems();
    });
  }

  async #loadItems() {
    if (!this.#repository) return;
    
    try {
      this._items = await this.#repository.getItems();
    } catch (error) {
      console.error('Failed to load items', error);
    }
  }

  #handleItemClick(item: MySiteItem) {
    // Navigate to the item details page
    window.location.href = `/section/mysite-section/item-details/${item.id}`;
  }

  render() {
    return html`
      <div class="tree-container">
        ${this._items.length === 0 
          ? html`<div class="umb-empty-state">No items found</div>` 
          : this._items.map(item => html`
              <div class="tree-item" @click=${() => this.#handleItemClick(item)}>
                <div class="tree-item-name">${item.name}</div>
                ${item.description 
                  ? html`<div class="tree-item-description">${item.description}</div>` 
                  : ''}
              </div>
            `)
        }
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mysite-tree-collection': MySiteTreeCollectionElement;
  }
}
