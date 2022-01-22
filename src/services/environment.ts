import * as data from "../../package.json";

export let API_BASE: string;
export let BASE_URL: string;
export let BASE_ROUTE: string;

if (process.env.NODE_ENV === "production") {
  // Production
  API_BASE = "/api";
  BASE_URL = "https://www.tsubakipad.com/";
  BASE_ROUTE = data.baseRoute;
} else {
  // Development
  API_BASE = "";
  BASE_URL = "http://localhost:5000/";
  BASE_ROUTE = "/";
}
