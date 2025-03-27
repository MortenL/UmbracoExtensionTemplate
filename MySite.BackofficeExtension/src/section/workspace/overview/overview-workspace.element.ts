import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import the view component
import './overview-view.element.js';

@customElement('mysite-overview-workspace')
export class MySiteOverviewWorkspaceElement extends UmbElementMixin(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  render() {
    return html`
      <mysite-overview-view></mysite-overview-view>
    `;
  }
}
