import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
