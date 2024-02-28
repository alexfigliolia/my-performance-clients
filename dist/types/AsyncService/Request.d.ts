import type { AsyncServiceOptions } from "./types";
export declare const AsyncServiceRequest: <D, V extends Record<string, any> = Record<string, any>>(options: AsyncServiceOptions<V>) => Promise<import("graphql-request/build/esm/types").GraphQLClientResponse<D>>;
