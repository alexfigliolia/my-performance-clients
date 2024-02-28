"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncServiceRequest = void 0;
const Client_1 = require("./Client");
const AsyncServiceRequest = (options) => {
    const client = new Client_1.AsyncServiceClient(options);
    return client.request();
};
exports.AsyncServiceRequest = AsyncServiceRequest;
