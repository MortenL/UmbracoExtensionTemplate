/**
 * API service for communicating with the backend
 */
import { OpenAPI } from "@umbraco-cms/backoffice/external/backend-api";

export interface MyDataModel {
  id: number;
  name: string;
  description?: string;
  isActive: boolean;
  createdDate?: string;
}

export class ApiService {
  // The API path needs to match exactly how the controller is registered
  // [VersionedApiBackOfficeRoute(Constants.ApiName)] where Constants.ApiName = "MySiteApi"
  public static readonly API_BASE = '/umbraco/management/api/v1/MySiteApi';

  /**
   * Get the authorization token for API requests
   */
  private static async getAuthToken(): Promise<string | undefined> {
    if (typeof OpenAPI.TOKEN === 'function') {
      try {
        // The OpenAPI.TOKEN function expects ApiRequestOptions
        // We're not making an actual API request here, just getting the token
        // So we provide dummy values that satisfy the type requirements
        return await OpenAPI.TOKEN({
          method: 'GET',
          url: this.API_BASE
        });
      } catch (error) {
        console.error('Error getting auth token:', error);
        return undefined;
      }
    }
    return typeof OpenAPI.TOKEN === 'string' ? OpenAPI.TOKEN : undefined;
  }

  /**
   * Get all data items
   * Maps to [HttpGet] GetData() in MyApiController
   */
  static async getData(): Promise<MyDataModel[]> {
    try {
      // Get the token from the OpenAPI configuration
      const token = await this.getAuthToken();
      
      // The URL must match the controller's route pattern exactly
      // The controller has [HttpGet] with no route template, so we just use the base URL
      const response = await fetch(this.API_BASE, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        credentials: 'include' // Critical for Umbraco backoffice auth
      });
      
      if (!response.ok) {
        console.error('API error details:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });
        
        // Try to get more details from the response
        let errorDetails = '';
        try {
          const errorText = await response.text();
          errorDetails = errorText;
        } catch (e) {
          // Ignore error reading response
        }
        
        throw new Error(`API error: ${response.status} - ${response.statusText}${errorDetails ? ` - ${errorDetails}` : ''}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  /**
   * Get a single data item by ID
   * Maps to [HttpGet("{id}")] GetById(int id) in MyApiController
   */
  static async getById(id: number): Promise<MyDataModel> {
    try {
      // Get the token from the OpenAPI configuration
      const token = await this.getAuthToken();
      
      // The URL must match the controller's route pattern exactly
      // The controller has [HttpGet("{id}")] so we append the ID to the base URL
      const response = await fetch(`${this.API_BASE}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        credentials: 'include' // Critical for Umbraco backoffice auth
      });
      
      if (!response.ok) {
        console.error('API error details:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });
        
        throw new Error(`API error: ${response.status} - ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching data by ID:', error);
      throw error;
    }
  }

  /**
   * Save a data item (create or update)
   * Maps to [HttpPost] SaveData([FromBody] MyDataModel model) in MyApiController
   */
  static async saveData(data: MyDataModel): Promise<{ success: boolean }> {
    try {
      // Get the token from the OpenAPI configuration
      const token = await this.getAuthToken();
      
      // The URL must match the controller's route pattern exactly
      // The controller has [HttpPost] with no route template, so we just use the base URL
      const response = await fetch(this.API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        credentials: 'include', // Critical for Umbraco backoffice auth
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        console.error('API error details:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });
        
        throw new Error(`API error: ${response.status} - ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  }
}
