export namespace IApiResponses {
  type Message = {
    author: 'admin' | 'visitor';
    content: string;
    createdAt: string;
    updatedAt: string;
  };

  export type IGetMarkdown = {
    _id: string;
    display: boolean;
    content: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };

  export type IGetList = {
    title: string;
    list: {
      _id: string;
      image: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
  };

  export type ISendMessage = Message;

  export type IGetMessages = Message[];

  export type IGetBasicData = {
    personal: {
      name: string;
      profession: string;
      email: string;
      avatar: string;
    };
    writings: IGetMarkdown[];
    tools: {
      _id: string;
      title: string;
      description: string;
      image: string;
      display: boolean;
      url?: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
  };

  export type IGetChats = {
    participants: ['60a007b8a883f9d77a71c5ae'];
    _id: '60a008a2a5d34cd8db7f6b4b';
    createdAt: '2021-05-15T17:45:06.267Z';
    updatedAt: '2021-05-15T17:45:06.267Z';
    __v: number;
  }[];

  export type IGetJSON = any;

  export type IInitConnection = {
    connection: {
      lookUpData: null | any;
      socketId: null | string;
      _id: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      ip: string;
    };
    isNewConnection: boolean;
  };
}
