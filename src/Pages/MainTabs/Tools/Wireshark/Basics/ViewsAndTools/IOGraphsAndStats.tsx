import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
