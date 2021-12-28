import { ApolloError } from "@apollo/client";
import { createApolloClient, ThreadConnection } from "lib";
import { Cursor } from "types";
import { GET_THREADS } from "./use-threads";

export async function getThreads(
  cursor?: Cursor
): Promise<{ data: ThreadConnection; loading: boolean; error?: ApolloError }> {
  const client = createApolloClient();

  const { loading, data, error } = await client.query<{
    threads: ThreadConnection;
  }>({
    query: GET_THREADS,
    variables: {
      page: {
        after: cursor,
      },
    },
  });

  return { loading, data: data.threads, error };
}
