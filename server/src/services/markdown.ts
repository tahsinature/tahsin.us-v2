import { repositories } from '@src/repositories'
import axios from 'axios'
import { parse } from 'node-html-parser'

class Service {
  async getSingleMarkdown(id: string) {
    const md = await repositories.markdown.getById(id)
    return md
  }

  formatIpInfo(ipInfo: { [key: string]: any }) {
    let all = ``

    for (const key in ipInfo) {
      let value: string
      try {
        value = JSON.stringify(ipInfo[key], null, 2)
      } catch (error) {
        value = ipInfo[key]
      }
      const md = `<details>
  <summary>
      ${key}
  </summary>

  \`\`\`json
      ${value}
  \`\`\`
</details>`

      all = all + md
    }
    return all
  }

  async getHTMLForMarkdown(md: string) {
    const response = await axios.post(
      'https://api.github.com/markdown',
      {
        text: md,
        mode: 'markdown',
      },
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    )

    const root = parse(response.data)
    return root
  }

  async getHTMLForJSON(data: any) {
    try {
      var str = JSON.stringify(data)
    } catch (error) {
      throw new Error('invalid data: failed to stringnify')
    }

    // return root
  }
}

export default new Service()
