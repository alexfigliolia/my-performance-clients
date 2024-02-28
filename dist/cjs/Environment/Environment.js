"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
require("dotenv/config");
class Environment {
    static accessOrThrow(key) {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Required environment variable "${key}" is not set`);
        }
        return value;
    }
}
exports.Environment = Environment;
_a = Environment;
Environment.CORE_SERVICE_URL = _a.accessOrThrow("CORE_SERVICE_URL");
Environment.ASYNC_SERVICE_URL = _a.accessOrThrow("ASYNC_SERVICE_URL");
