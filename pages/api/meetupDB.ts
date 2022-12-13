import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const meetupDB = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body.meetupData;
    console.log('data:: ', data);

    const client = await MongoClient.connect(
      'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/next-meetups?retryWrites=true&w=majority'
    );

    const db = client.db();
    const collection = db.collection('meetups');

    const result = await collection.insertOne(data);

    client.close();

    console.log('result:: ', result);

    res.status(200).json({ success: true });
  }
};
export default meetupDB;
