import { file } from "bun";
import { buildSchema } from "graphql";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { graphqlServer } from "@hono/graphql-server";

import notion from "./notion";
import tracker from "./tracker";

const app = new Hono();

const srcDir = import.meta.dir;
const schemaFilePath = srcDir.concat("/schema.graphql");
const schemaString = await file(schemaFilePath).text();

class Todo {
  id: string | undefined;
  properties:
    | {
        Name: {
          title: [{ plain_text: string }];
        };
        Status: {
          status: {
            name: string;
          };
        };
      }
    | undefined;

  public toJSON() {}
}

// // The rootValue provides a resolver function for each API endpoint
var rootResolver = () => {
  return {
    hello: () => {
      return "Hello world!";
    },
    todos: async () => {
      const resp = await notion.query<Todo>({
        database_id: notion.dbIds.DB_Todo,
        filter: {
          property: "Status",
          status: {
            equals: "In Progress",
          },
        },
      });

      return resp.map((ele) => {
        return {
          title: ele.properties?.Name.title[0].plain_text,
          id: ele.id,
          status: ele.properties?.Status.status.name,
        };
      });

      // return [];
    },
  };
};

const graphQLServer = graphqlServer({
  schema: buildSchema(schemaString),
  rootResolver,
});

app.use("*", tracker);
app.use("*", logger());
app.use("/graph", graphQLServer);
app.use("*", serveStatic({ root: "public" }));

export default {
  port: 3001,
  fetch: app.fetch as any,
};
