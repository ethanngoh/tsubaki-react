import { AxiosError } from "axios";
import { observable, runInAction } from "mobx";
import { AddAccountRequest, AddAccountResponse, GetAccountRequest, GetAccountResponse } from "protogen/accounts";
import { toastError } from "../../components/Toast";
import { AccountService } from "./AccountService";

export class AccountStore {
  private service: AccountService;

  constructor(service: AccountService) {
    this.service = service;
  }

  @observable
  public getResponse!: GetAccountResponse;

  public async get(request: GetAccountRequest) {
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

  @observable
  public addAccountResponse!: AddAccountResponse;

  public async add(request: AddAccountRequest) {
    try {
      const data = await this.service.post(request);
      runInAction(() => {
        this.addAccountResponse = data;
      });
      return true;
    } catch (e) {
      toastError((e as AxiosError).response!.data["error"]);
      return false;
    }
  }
}
