import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RingBuffersAndPerformance = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/RemoteCapture/RingBuffersAndPerformance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ring Buffers & Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RingBuffersAndPerformance;
