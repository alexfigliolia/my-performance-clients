import { GQLSubscription } from "@alexfigliolia/graphql-client";
import { Environment } from "../Environment/index.js";
export class AsyncServiceSubscription extends GQLSubscription {
    constructor(query, variables) {
        super({
            query,
            variables,
            url: `${Environment.ASYNC_SERVICE_URL}/graphql`,
        });
    }
}
