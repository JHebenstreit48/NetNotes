import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const FollowStreamsAndRTT = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Analysis/FollowStreamsAndRTT';

  return (
    <>
      <PageLayout>
        <PageTitle title="Follow Streams & RTT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FollowStreamsAndRTT;
