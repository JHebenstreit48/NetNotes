import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
