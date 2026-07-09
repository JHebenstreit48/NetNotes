import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
