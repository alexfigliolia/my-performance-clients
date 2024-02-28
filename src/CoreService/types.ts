import type { IGQLRequest } from "@alexfigliolia/graphql-client";

export type CoreServiceOptions<
  V extends Record<string, any> = Record<string, any>,
> = Omit<IGQLRequest<V>, "url">;
