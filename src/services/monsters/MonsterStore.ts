import { AxiosError } from "axios";
import { observable, runInAction, makeObservable } from "mobx";
import { GetMonsterRequest, GetMonsterResponse } from "protogen/monsters_api";
import { toastError } from "../../components/Toast";
import { MonsterService } from "./MonsterService";

export class MonsterStore {
  private service: MonsterService;

  constructor(service: MonsterService) {
    makeObservable(this);
    this.service = service;
  }

  @observable
  public getResponse!: GetMonsterResponse;

  public async get(request: GetMonsterRequest) {
    try {
      const data = await this.service.get(request);
      runInAction(() => {
        this.getResponse = data;
      });
      return true;
    } catch (e) {
      toastError((e as AxiosError).response!.data["error"]);
      return false;
    }
  }

}
