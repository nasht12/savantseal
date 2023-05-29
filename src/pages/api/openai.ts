import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const prompt = req.body.prompt;
    const response = "This is a response to your prompt";

    res.status(200).json({ prompt: prompt, response: response });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
