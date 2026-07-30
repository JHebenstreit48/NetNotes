import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
