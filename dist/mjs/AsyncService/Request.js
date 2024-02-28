import { AsyncServiceClient } from "./Client.js";
export const AsyncServiceRequest = (options) => {
    const client = new AsyncServiceClient(options);
    return client.request();
};
