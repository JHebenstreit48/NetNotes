import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
  const markdownFilePath = '/CoreConcepts/Basics/OSIModel/OSIvsTCPIP/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
