import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mysite-settings-workspace')
export class MySiteSettingsWorkspaceElement extends UmbElementMixin(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  render() {
    return html`
      <mysite-settings-view>settings</mysite-settings-view>
    `;
  }
}
