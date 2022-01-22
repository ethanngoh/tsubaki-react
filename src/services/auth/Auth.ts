import { v4 as uuid } from "uuid";

const UUID_LOCATION = "TSUBAKI-UUID";
const AUTH_TOKEN = "TSUBAKI-AUTH-TOKEN";
const REFRESH_TOKEN = "TSUBAKI-REFRESH-TOKEN";
const EXPIRES_MS = "TSUBAKI-TOKEN-EXPIRES-MS";

function localStorageSetOrClear(key: string, value: string | null) {
  if (!value) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, value);
  }
}

export class AuthLocalStorage {
  constructor() {
    if (!this.UUID) {
      localStorage.setItem(UUID_LOCATION, uuid());
    }
  }

  public get UUID(): string | null {
    return localStorage.getItem(UUID_LOCATION);
  }

  public get authToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN);
  }

  public set authToken(value: string | null) {
    localStorageSetOrClear(AUTH_TOKEN, value);
  }

  public get refreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  public set refreshToken(value: string | null) {
    localStorageSetOrClear(REFRESH_TOKEN, value);
  }

  public get expiresMsStr(): string | null {
    return localStorage.getItem(EXPIRES_MS);
  }

  public set expiresMsStr(value: string | null) {
    localStorageSetOrClear(EXPIRES_MS, value);
  }
}
