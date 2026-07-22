import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
