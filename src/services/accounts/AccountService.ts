import { AxiosInstance } from "axios";
import { AddAccountRequest, AddAccountResponse, GetAccountRequest, GetAccountResponse } from "../../protogen/accounts";
import { API_BASE } from "../environment";

export const GET_ACCOUNT_REQUEST_URL = `${API_BASE}/account`;
export const POST_ACCOUNT_REQUEST_URL = `${API_BASE}/account`;

export class AccountService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async get(request: GetAccountRequest): Promise<GetAccountResponse> {
    return (await this.client.get(GET_ACCOUNT_REQUEST_URL, { params: { ...request } })).data;
  }

  public async post(request: AddAccountRequest): Promise<AddAccountResponse> {
    return (await this.client.post(POST_ACCOUNT_REQUEST_URL, { ...request })).data;
  }
}
