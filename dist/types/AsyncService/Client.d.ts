import { GQLClient } from "@alexfigliolia/graphql-client";
import type { AsyncServiceOptions } from "./types";
export declare class AsyncServiceClient<D, V extends Record<string, any> = Record<string, any>> extends GQLClient<D, V> {
    constructor(options: AsyncServiceOptions<V>);
}
