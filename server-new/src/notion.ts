import { Client } from "@notionhq/client";
import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

type WithAuth<P> = P & {
  auth?: string;
};

class Notion {
  public dbIds = {
    DB_Movies: "24a291a3e1954ac199aa89b89e3927c0",
    DB_Books: "833e89bbbe954fd9a6af2d3be67b7ff1",
    DB_Articles: "3b7cb55d7395448bb3319201f0d72f0d",
    DB_ProgrammingLanguages: "cbcb72d3e7dc4b76932820924b2235f0",
    DB_HumanLanguages: "3bcd0134b20543a28dd77d8599368cb6",
    DB_Photographs: "1fd4dd4839e14ec5a855b80b8c065210",
    DB_Projects: "2f79671da473414eaf4ad9fb4b80bc91",
    DB_Todo: "facee354b172445690aa3fa1c0ef849d",
  };

  private client = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  public async query<T>(args: QueryDatabaseParameters) {
    const response = await this.client.databases.query(args);
    return response.results as T[];
  }
}

export default new Notion();
