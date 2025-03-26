import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { MY_REPOSITORY_CONTEXT, MyRepositoryContext } from '../repositories/my-repository.context';

@customElement('mysite-tree-view')
export class MySiteTreeViewElement extends UmbLitElement {
  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
      }
      .tree-header {
        padding: 16px;
        border-bottom: 1px solid var(--uui-color-divider);
      }
      .tree-header h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
      }
    `
  ];

  constructor() {
    super();
    
    // Provide the repository context to child components
    this.provideContext(MY_REPOSITORY_CONTEXT, new MyRepositoryContext(this));
  }

  render() {
    return html`
      <div class="tree-container">
        <div class="tree-header">
          <h2>MySite Items</h2>
        </div>
        <mysite-tree-collection></mysite-tree-collection>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mysite-tree-view': MySiteTreeViewElement;
  }
}
