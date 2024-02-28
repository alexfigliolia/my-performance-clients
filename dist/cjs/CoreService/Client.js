"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServiceClient = void 0;
const graphql_client_1 = require("@alexfigliolia/graphql-client");
const Environment_1 = require("../Environment");
class CoreServiceClient extends graphql_client_1.GQLClient {
    constructor(options) {
        super(Object.assign({ url: `${Environment_1.Environment.CORE_SERVICE_URL}/graphql` }, options));
    }
}
exports.CoreServiceClient = CoreServiceClient;
