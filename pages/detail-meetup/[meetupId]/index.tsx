import { MongoClient, ObjectId } from 'mongodb';
import { Context } from 'vm';
import MeetupDetail from '../../../components/meetups/MeetupDetail';
import { MeetupData } from '../../../types';

const MeetupDetails = (props: MeetupData) => {
  return (
    <>
      <MeetupDetail
        key={props.id}
        id={props.id}
        title={props.title}
        image={props.image}
        address={props.address}
        description={props.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/next-meetups?retryWrites=true&w=majority'
  );

  const db = client.db();
  const collection = db.collection('meetups');
  const meetupIds = await collection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    paths: meetupIds.map((id) => ({
      params: { meetupId: id._id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: Context) {
  const meetupId = context.params.meetupId;
  console.log('meetupId:: ', meetupId);

  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/next-meetups?retryWrites=true&w=majority'
  );

  const db = client.db();
  const collection = db.collection('meetups');
  const foundData = await collection.findOne({ _id: new ObjectId(meetupId) });
  console.log('foundData:: ', foundData);

  client.close();

  return {
    props: {
      id: foundData?._id.toString(),
      title: foundData?.title,
      image: foundData?.image,
      address: foundData?.address,
      description: foundData?.description,
    },
  };
}

export default MeetupDetails;
