import { OpenAPI } from "./client";

export const environment = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

if (environment === "development") {
  OpenAPI.BASE = "http://localhost:8001";
} else if (environment === "production") {
  OpenAPI.BASE = "http://api.tsubakibot.com:8001";
}
