import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.ORGANIZATION_ID
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.listModels();
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error listing models' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
