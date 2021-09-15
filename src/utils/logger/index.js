import devLogger from "./dev-logger.js";
import prodLogger from "./prod-logger.js";
import testLogger from "./test-logger.js";
import { env as environment } from "#src/config/server.js";

export default function logger(env = environment) {
  if (env === "production") {
    return prodLogger;
  } else if (env === "test") {
    return testLogger;
  } else {
    return devLogger;
  }
}
