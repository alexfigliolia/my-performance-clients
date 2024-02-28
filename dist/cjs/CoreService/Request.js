"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServiceRequest = void 0;
const Client_1 = require("./Client");
const CoreServiceRequest = (options) => {
    const client = new Client_1.CoreServiceClient(options);
    return client.request();
};
exports.CoreServiceRequest = CoreServiceRequest;
