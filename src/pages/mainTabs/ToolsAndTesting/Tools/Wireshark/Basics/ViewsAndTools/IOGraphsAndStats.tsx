import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IOGraphsAndStats = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/ViewsAndTools/IOGraphsAndStats';

  return (
    <>
      <PageLayout>
        <PageTitle title="IO Graphs & Stats" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOGraphsAndStats;
