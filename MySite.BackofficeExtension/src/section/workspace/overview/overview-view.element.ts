import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ApiService, MyDataModel } from '../../../services/api.service.js';

@customElement('mysite-overview-view')
export class MySiteOverviewViewElement extends UmbElementMixin(LitElement) {
  @state()
  private _items: Array<MyDataModel> = [];

  @state()
  private _isLoading = false;

  @state()
  private _error: string | null = null;

  @state()
  private _debugInfo: {
    requestTime?: string;
    responseTime?: string;
    requestUrl?: string;
    responseStatus?: string;
    itemCount?: number;
    rawResponse?: string;
    lifecycleEvents: Array<{timestamp: string, event: string}>;
  } = {
    lifecycleEvents: []
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .error {
      color: var(--uui-color-danger);
      padding: 1rem;
      border: 1px solid var(--uui-color-danger-light);
      border-radius: var(--uui-border-radius);
      margin-bottom: 1rem;
    }

    .loading {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem;
      color: var(--uui-color-text-alt);
    }
    
    .debug-panel {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
    }
    
    .debug-panel h3 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
    
    .debug-panel pre {
      background-color: #eee;
      padding: 0.5rem;
      overflow: auto;
      max-height: 200px;
    }
    
    .debug-panel .event-log {
      max-height: 150px;
      overflow-y: auto;
    }
    
    .debug-panel .event-item {
      margin-bottom: 0.25rem;
      padding: 0.25rem;
      border-bottom: 1px solid #ddd;
    }

    .table-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .table-info {
      font-size: 0.9rem;
      color: var(--uui-color-text-alt);
    }
  `;

  constructor() {
    super();
    this._logEvent('constructor');
  }
  
  connectedCallback() {
    super.connectedCallback();
    this._logEvent('connectedCallback');
    this._fetchData();
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this._logEvent('disconnectedCallback');
  }
  
  private _logEvent(event: string) {
    this._debugInfo = {
      ...this._debugInfo,
      lifecycleEvents: [
        ...this._debugInfo.lifecycleEvents,
        {
          timestamp: new Date().toISOString(),
          event
        }
      ]
    };
    console.log(`[MySiteOverviewView] ${event}`);
  }

  private async _fetchData() {
    try {
      // Get the token from the OpenAPI configuration
      this._isLoading = true;
      this._error = null;
      
      const requestUrl = ApiService.API_BASE;
      const requestTime = new Date().toISOString();
      
      this._debugInfo = {
        ...this._debugInfo,
        requestTime,
        requestUrl
      };
      
      this._logEvent(`fetchData: Requesting ${requestUrl}`);
      
      const data = await ApiService.getData();
      
      const responseTime = new Date().toISOString();
      
      this._debugInfo = {
        ...this._debugInfo,
        responseTime,
        responseStatus: 'success',
        itemCount: data.length,
        rawResponse: JSON.stringify(data, null, 2)
      };
      
      this._logEvent(`fetchData: Response received (success)`);
      this._items = data;
      this._logEvent(`fetchData: Loaded ${this._items.length} items`);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this._error = errorMessage;
      
      // Create a safe serializable error object
      const errorObj = error instanceof Error 
        ? { 
            message: error.message, 
            name: error.name, 
            stack: error.stack 
          } 
        : error;
      
      this._debugInfo = {
        ...this._debugInfo,
        responseTime: new Date().toISOString(),
        responseStatus: 'exception',
        rawResponse: JSON.stringify(errorObj, null, 2)
      };
      
      this._logEvent(`fetchData: Exception - ${errorMessage}`);
    } finally {
      this._isLoading = false;
    }
  }

  render() {
    this._logEvent('render');
    
    if (this._isLoading) {
      return html`
        <div class="loading">
          <uui-loader></uui-loader>
        </div>
      `;
    }

    if (this._error) {
      return html`
        <div class="error">
          <p>${this._error}</p>
          <uui-button label="Retry" @click=${this._fetchData}></uui-button>
        </div>
        ${this._renderDebugPanel()}
      `;
    }

    if (this._items.length === 0) {
      return html`
        <div class="empty-state">
          <p>No data available</p>
          <uui-button look="primary" label="Refresh" @click=${this._fetchData}></uui-button>
        </div>
        ${this._renderDebugPanel()}
      `;
    }

    return html`
      <uui-box headline="Data Items">
        <div class="table-actions">
          <uui-button look="primary" label="Refresh" @click=${this._fetchData}></uui-button>
          <span class="table-info">${this._items.length} items</span>
        </div>
        <uui-table>
          <uui-table-column style="background-color: "></uui-table-column>
          <uui-table-column style="width: 20%; background-color: "></uui-table-column>
          <uui-table-column style="width: 20%; background-color: "></uui-table-column>
          <uui-table-column style="width: 20%; background-color: "></uui-table-column>
          <uui-table-column style="width: 20%; background-color: "></uui-table-column>
          <uui-table-head>
            <uui-table-head-cell>ID</uui-table-head-cell>
            <uui-table-head-cell>Name</uui-table-head-cell>
            <uui-table-head-cell>Description</uui-table-head-cell>
            <uui-table-head-cell>Status</uui-table-head-cell>
            <uui-table-head-cell>Created Date</uui-table-head-cell>
          </uui-table-head>
            ${this._items.map(item => html`
              <uui-table-row>
                <uui-table-cell>${item.id}</uui-table-cell>
                <uui-table-cell>${item.name}</uui-table-cell>
                <uui-table-cell>${item.description || '-'}</uui-table-cell>
                <uui-table-cell>
                  <uui-tag color=${item.isActive ? 'positive' : 'neutral'}>
                    ${item.isActive ? 'Active' : 'Inactive'}
                  </uui-tag>
                </uui-table-cell>
                <uui-table-cell>
                  ${item.createdDate ? 
                    new Date(item.createdDate).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    }) 
                    : '-'
                  }
                </uui-table-cell>
              </uui-table-row>
            `)}
        </uui-table>
        ${this._renderDebugPanel()}
      </uui-box>
    `;
  }
  
  private _renderDebugPanel() {
    return html`
      <div class="debug-panel">
        <h3>Debug Information</h3>
        <div>
          <strong>Request URL:</strong> ${this._debugInfo.requestUrl || 'N/A'}
        </div>
        <div>
          <strong>Request Time:</strong> ${this._debugInfo.requestTime || 'N/A'}
        </div>
        <div>
          <strong>Response Time:</strong> ${this._debugInfo.responseTime || 'N/A'}
        </div>
        <div>
          <strong>Response Status:</strong> ${this._debugInfo.responseStatus || 'N/A'}
        </div>
        <div>
          <strong>Item Count:</strong> ${this._debugInfo.itemCount !== undefined ? this._debugInfo.itemCount : 'N/A'}
        </div>
        
        <h4>Event Log</h4>
        <div class="event-log">
          ${this._debugInfo.lifecycleEvents.map(event => html`
            <div class="event-item">
              <span>${event.timestamp}</span> - <strong>${event.event}</strong>
            </div>
          `)}
        </div>
        
        <h4>Raw Response</h4>
        <pre>${this._debugInfo.rawResponse || 'No response data'}</pre>
      </div>
    `;
  }
}
