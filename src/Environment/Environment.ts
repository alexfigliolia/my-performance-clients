import "dotenv/config";

export class Environment {
  public static CORE_SERVICE_URL = this.accessOrThrow("CORE_SERVICE_URL");
  public static ASYNC_SERVICE_URL = this.accessOrThrow("ASYNC_SERVICE_URL");

  private static accessOrThrow(key: string) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Required environment variable "${key}" is not set`);
    }
    return value;
  }
}
