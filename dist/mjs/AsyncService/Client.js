import { GQLClient } from "@alexfigliolia/graphql-client";
import { Environment } from "../Environment/index.js";
export class AsyncServiceClient extends GQLClient {
    constructor(options) {
        super({
            url: `${Environment.ASYNC_SERVICE_URL}/graphql`,
            ...options,
        });
    }
}
