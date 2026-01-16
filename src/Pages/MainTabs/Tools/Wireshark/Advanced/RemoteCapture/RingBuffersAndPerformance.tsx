import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RingBuffersAndPerformance = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/RemoteCapture/RingBuffersAndPerformance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ring Buffers & Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RingBuffersAndPerformance;
