import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnicastMulticastBroadcast = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/PlanesAndTraffic/UnicastMulticastBroadcast';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unicast • Multicast • Broadcast" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnicastMulticastBroadcast;
