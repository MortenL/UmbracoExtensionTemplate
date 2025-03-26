import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mysite-dashboard')
export class MySiteDashboardElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
    .welcome-message {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .dashboard-card {
      background-color: #f5f5f5;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
    }
  `;

  render() {
    return html`
      <div>
        <h1 class="welcome-message">Welcome to MySite Dashboard</h1>
        
        <div class="dashboard-card">
          <h2>Recent Activity</h2>
          <p>This dashboard provides an overview of recent activity in your Umbraco site.</p>
        </div>
        
        <div class="dashboard-card">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/section/mysite-section/overview">Go to MySite Section</a></li>
            <li><a href="/section/content">Go to Content</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}
