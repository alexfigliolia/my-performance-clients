import { GQLClient } from "@alexfigliolia/graphql-client";
import type { CoreServiceOptions } from "./types";
export declare class CoreServiceClient<D, V extends Record<string, any> = Record<string, any>> extends GQLClient<D, V> {
    constructor(options: CoreServiceOptions<V>);
}
