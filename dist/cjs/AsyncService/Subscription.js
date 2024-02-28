"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncServiceSubscription = void 0;
const graphql_client_1 = require("@alexfigliolia/graphql-client");
const Environment_1 = require("../Environment");
class AsyncServiceSubscription extends graphql_client_1.GQLSubscription {
    constructor(query, variables) {
        super({
            query,
            variables,
            url: `${Environment_1.Environment.ASYNC_SERVICE_URL}/graphql`,
        });
    }
}
exports.AsyncServiceSubscription = AsyncServiceSubscription;
