import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mysite-menu-item')
export class MySiteMenuItemElement extends LitElement {
  @property({ type: String })
  icon = '';

  @property({ type: String })
  label = '';

  @property({ type: String })
  route = '';

  static styles = css`
    :host {
      display: block;
    }
    .menu-item {
      display: flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .menu-item:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .icon {
      margin-right: 10px;
    }
  `;

  private handleClick() {
    // Use the Umbraco 15 navigation pattern
    // Make sure we have a valid route value
    const routePath = this.route || 'overview';
    window.location.href = `/section/mysite-section/workspace/${routePath}`;
  }

  render() {
    return html`
      <div class="menu-item" @click=${this.handleClick}>
        <span class="icon ${this.icon}"></span>
        <span>${this.label}</span>
      </div>
    `;
  }
}
