import "dotenv/config";
export class Environment {
    static CORE_SERVICE_URL = this.accessOrThrow("CORE_SERVICE_URL");
    static ASYNC_SERVICE_URL = this.accessOrThrow("ASYNC_SERVICE_URL");
    static accessOrThrow(key) {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Required environment variable "${key}" is not set`);
        }
        return value;
    }
}
