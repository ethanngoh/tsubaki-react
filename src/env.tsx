import { OpenAPI } from "./client";

const environment = process.env.REACT_APP_ENVIRONMENT ? process.env.REACT_APP_ENVIRONMENT : "development";

if (environment == "development") {
  OpenAPI.BASE = "http://localhost:8001";
} else if (environment == "production") {
  OpenAPI.BASE = "http://api.tsubakibot.com:8001";
}
