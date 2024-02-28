"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncServiceClient = void 0;
const graphql_client_1 = require("@alexfigliolia/graphql-client");
const Environment_1 = require("../Environment");
class AsyncServiceClient extends graphql_client_1.GQLClient {
    constructor(options) {
        super(Object.assign({ url: `${Environment_1.Environment.ASYNC_SERVICE_URL}/graphql` }, options));
    }
}
exports.AsyncServiceClient = AsyncServiceClient;
