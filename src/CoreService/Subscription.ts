import { GQLSubscription } from "@alexfigliolia/graphql-client";
import { Environment } from "Environment";

export class CoreServiceSubscription<
  D,
  V extends Record<string, any> = Record<string, any>,
> extends GQLSubscription<D, V> {
  constructor(query: string, variables: V) {
    super({
      query,
      variables,
      url: `${Environment.CORE_SERVICE_URL}/graphql`,
    });
  }
}
