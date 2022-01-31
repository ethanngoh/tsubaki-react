import { AxiosInstance } from "axios";
import { GetMonsterRequest, GetMonsterResponse } from "../../protogen/monsters_api";
import { API_BASE } from "../environment";

export const GET_MONSTER_REQUEST_URL = `${API_BASE}/monster`;
export const POST_MONSTER_REQUEST_URL = `${API_BASE}/monster`;

export class MonsterService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async get(request: GetMonsterRequest): Promise<GetMonsterResponse> {
    return (await this.client.get(GET_MONSTER_REQUEST_URL, { params: { ...request } })).data;
  }

}
