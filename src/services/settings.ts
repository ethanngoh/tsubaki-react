import packageData from "../../package.json";

export const VERSION = packageData.version;
export const CLIENT_NAME = "TsubakiReact";
export const PLATFORM = "web";

export const CLIENT_ID_HEADER_NAME = "X-Tsubaki-Client-Id";
export const CLIENT_ID_HEADER_VALUE = `${CLIENT_NAME}/${PLATFORM}/${VERSION}`;
export const CLIENT_AUTH_SOURCE_HEADER_NAME = "X-Tsubaki-Auth-Source";
export const CLIENT_AUTHORIZATION_HEADER_NAME = "Authorization";
export const CLIENT_AUTHORIZATION_HEADER_VALUE = (token: string) =>
  `Bearer ${token}`;
export const CLIENT_DEVICE_ID_HEADER_NAME = "X-Tsubaki-Device-Id";

export enum AUTH_SOURCES {
  "Google" = "Google",
  "Facebook" = "Facebook",
}
