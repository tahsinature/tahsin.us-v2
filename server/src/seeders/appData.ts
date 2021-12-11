import AppData, { IAppDataDoc } from '@root/src/models/AppData'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'

class Seeder extends BaseSeeder<IAppDataDoc> {
  model = AppData
  public createOne() {
    return AppData.create({
      tools: [
        {
          title: 'gRPC',
          description: `I like gRPC transport mechanism for request/response as non-persistent streaming protocol.`,
          image: `https://s.appbrain.com/static/202003041452037/blob/sdk-logos/grpc.png`,
          display: true,
        },
        {
          title: 'Google Cloud Pub/Sub',
          description: `GC Pub/Sub became my favt tool for event driven architecture and a good alternative to Kafka as it is backed by Google and because of it's less complexity`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fgoogle-pub-sub.png?alt=media&token=114864ba-6c9f-4ee4-bb33-305049f5cb32`,
          display: true,
        },
        {
          title: 'Socket.IO',
          description: 'I am using Socket.IO for bi-directional communication for quite a long now.',
          image: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsocket-io-logo.svg?alt=media&token=8c692e6c-a53e-4054-b19c-6d99c5d1e643',
          display: false,
        },
        {
          title: 'FCM',
          description: `Using Firebase Cloud Messaging (FCM) since 2019, as it's powered by Google, feels pretty consistant and reliable.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Ffirebase_logo.png?alt=media&token=c1230b32-e464-48f0-8d3f-b49fe600f71b`,
          display: false,
        },
        {
          title: 'Protocol Buffers',
          description: `It's a method of serializing structured data. Mostly using it as a data transfer protocol for gRPC. In some other cases, it's can be replacement of JSON as well.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fprotobuff-logo.png?alt=media&token=ab03789b-fdef-4232-b2a4-0cc58c81b395`,
          display: false,
        },
        {
          title: 'Docker',
          description: `Everyday's tool. In fact if I create a new repo now, I put it on docker first.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fdocker-logo.png?alt=media&token=531f83a7-ace5-4a31-b825-822dbc1aa6c5`,
          display: true,
        },
        // {
        //   title: 'Kubernetes',
        //   description: 'It's basically for DevOps. But sometimes we as backend engineer, need to ',
        //   image: "It's basically for DevOps. But sometimes we as backend engineer, need to ",
        // },
        {
          title: 'Jest',
          description: `Previously I was using Jasmine for testing. Now using Jest for couple of years now.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjest-logo.jpg?alt=media&token=a97a9453-7782-4a0f-bde4-915274ebbff9`,
          display: true,
        },
        {
          title: 'Jasmine',
          description: `Before I started to use Jest, I was using Jesmine continuously as a testing framework for JavaScript`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjasmine-logo.png?alt=media&token=e6ae2173-a0b5-4c74-be00-af037aa7a23c`,
          display: false,
        },
        {
          title: 'Redux',
          description: `If I use React or React Native apps, redux will take place there for sure.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fredux-logo.png?alt=media&token=2868fad7-92b8-46d3-be0c-fa1b6039b1d1`,
          display: false,
        },
        {
          title: 'Sass',
          description: `Whenever I say I am writting CSS, it means I am writting Sass. I mean literally`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsass-logo.png?alt=media&token=5302045a-468b-4ea4-8c99-421330500513`,
          display: false,
        },
        {
          title: 'Gulp',
          description: `I use gulp mostly when I don't use a framework. Great tool as a task-runner`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fgulp-logo.jpg?alt=media&token=516b0e41-67b7-4410-9828-23819c2b0f85`,
          display: false,
        },
        {
          title: 'Git',
          description: `Of course you can say, "Every minute I use Git on GitHub and GitLab". Literally.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fgit-logo.png?alt=media&token=48901fa3-44ad-43c3-8f1f-88fa5074f7e5`,
          display: false,
        },
        {
          title: 'Sequelize',
          description: `I use Sequelize as ORM for relational databases (Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server) when I work with Node.js application.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsequelize-logo.svg?alt=media&token=e5377e6a-767d-4139-a4a3-b548f2eae8b4`,
          display: false,
        },
        {
          title: 'Mongoose',
          description: `I use Mongoose as ORM for MongoDB when I work with Node.js application.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fmongoose.jpg?alt=media&token=1bfc0bd0-0100-4cff-8a15-7f88d63b9607`,
          display: false,
        },
        {
          title: 'Redis',
          description: `I've been using Redis for caching & scheduling. I love it for those purposes.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fredis-logo.png?alt=media&token=f39a4fde-2be6-407d-8e87-7f97e7c1c2dd`,
          display: false,
        },
        {
          title: 'Postgres',
          description: `My first choice for relational databases.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2FPostgresql_elephant.svg?alt=media&token=32805678-a9c7-440b-a53b-e2ccd738ae1e`,
          display: false,
        },
        {
          title: 'MongoDB',
          description: `For my most of the work, I try to use MongoDB when it fits.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2FMongoDB_logo_01.png?alt=media&token=1bb52314-5e09-4e61-bd11-ce2c289f465b`,
          display: false,
        },
        {
          title: 'Firebase',
          description: `I love this platform. I feel so comfortable and confident as it's backed by Google`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Ffirebase_logo.png?alt=media&token=c1230b32-e464-48f0-8d3f-b49fe600f71b`,
          display: false,
        },
        {
          title: 'SonarQube',
          description: `I use Sonar to inspect my code quality, detect bugs, code smells and security vulnerabilities. Really helps when I work in a team.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsonarqube-logo.png?alt=media&token=c75b584c-77d4-4341-8c5b-71616300830d`,
          display: true,
        },
        {
          title: 'HashiCorp Vault',
          description: `It's a single source of truth to manage credentials. I use it for storing application API keys, passwords, certificates and other sensitive data.`,
          image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fhashicorp-vault-logo.png?alt=media&token=950f4c59-a5b0-4eaf-8b1b-683c8889e4c4`,
          display: true,
        },
      ],
    })
  }
}

export default new Seeder()
