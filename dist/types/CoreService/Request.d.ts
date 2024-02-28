import type { CoreServiceOptions } from "./types";
export declare const CoreServiceRequest: <D, V extends Record<string, any> = Record<string, any>>(options: CoreServiceOptions<V>) => Promise<import("graphql-request/build/esm/types").GraphQLClientResponse<D>>;
