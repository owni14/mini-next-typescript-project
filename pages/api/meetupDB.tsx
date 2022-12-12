import { MongoClient } from 'mongodb';

const meetupDB = (props: any) => {
  if (props.method === 'POST') {
    MongoClient.connect(
      'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/?retryWrites=true&w=majority'
    );
  }
  return <>mongoDb</>;
};
export default meetupDB;
