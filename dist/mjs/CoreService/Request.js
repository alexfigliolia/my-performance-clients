import { CoreServiceClient } from "./Client.js";
export const CoreServiceRequest = (options) => {
    const client = new CoreServiceClient(options);
    return client.request();
};
