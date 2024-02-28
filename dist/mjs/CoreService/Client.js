import { GQLClient } from "@alexfigliolia/graphql-client";
import { Environment } from "../Environment/index.js";
export class CoreServiceClient extends GQLClient {
    constructor(options) {
        super({
            url: `${Environment.CORE_SERVICE_URL}/graphql`,
            ...options,
        });
    }
}
