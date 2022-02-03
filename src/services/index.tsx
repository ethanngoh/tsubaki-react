import axios, { AxiosError } from "axios";
import { inject, observer } from "mobx-react";
import { ComponentClass } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthLocalStorage } from "./auth/Auth";
import { BASE_URL } from "./environment";
import { MonsterService } from "./monsters/MonsterService";
import { MonsterStore } from "./monsters/MonsterStore";
import {
  AUTH_SOURCES,
  CLIENT_AUTHORIZATION_HEADER_NAME,
  CLIENT_AUTHORIZATION_HEADER_VALUE,
  CLIENT_AUTH_SOURCE_HEADER_NAME,
  CLIENT_ID_HEADER_NAME,
  CLIENT_ID_HEADER_VALUE,
} from "./settings";

interface IAllStores extends IServiceStores {}

interface IServiceStores {
  monsterStore: MonsterStore;
}

export class Stores {
  private authLocal: AuthLocalStorage;
  private monsterStore: MonsterStore;

  public constructor() {
    this.authLocal = new AuthLocalStorage();
    const axiosClient = this.createAxiosClient(this.authLocal);
    this.monsterStore = new MonsterStore(new MonsterService(axiosClient));
  }

  public get stores(): IAllStores {
    return {
      monsterStore: this.monsterStore,
    };
  }

  private createAxiosClient(authLocal: AuthLocalStorage) {
    const axiosClient = axios.create({
      baseURL: BASE_URL,
      data: null,
      headers: {
        [CLIENT_ID_HEADER_NAME]: CLIENT_ID_HEADER_VALUE,
        "Content-Type": "application/json",
      },
    });
    axiosClient.interceptors.request.use((config) => {
      if (!config.headers![CLIENT_AUTHORIZATION_HEADER_NAME] && authLocal.authToken) {
        config.headers = {
          ...config.headers,
          [CLIENT_AUTH_SOURCE_HEADER_NAME]: AUTH_SOURCES.Google,
          [CLIENT_AUTHORIZATION_HEADER_NAME]: CLIENT_AUTHORIZATION_HEADER_VALUE(authLocal.authToken),
        };
      }
      return config;
    });
    axiosClient.interceptors.response.use((response) => response);

    return axiosClient;
  }
}

type SatisfiedStorePropsComponent<OriginalProps, StoreTypes> = ComponentClass<{
  [K in Exclude<keyof OriginalProps, StoreTypes>]: OriginalProps[K];
}>;

export function injectStore<StoreTypes extends keyof IServiceStores, PropsType>(
  baseComponent: ComponentClass<PropsType>,
  ...stores: StoreTypes[]
): SatisfiedStorePropsComponent<PropsType, StoreTypes> {
  return inject(...stores)(observer(baseComponent)) as {} as ComponentClass<{
    [K in Exclude<keyof PropsType, StoreTypes>]: PropsType[K];
  }>;
}

export function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
