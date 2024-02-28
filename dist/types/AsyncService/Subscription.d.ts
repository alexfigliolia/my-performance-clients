import { GQLSubscription } from "@alexfigliolia/graphql-client";
export declare class AsyncServiceSubscription<D, V extends Record<string, any> = Record<string, any>> extends GQLSubscription<D, V> {
    constructor(query: string, variables: V);
}
