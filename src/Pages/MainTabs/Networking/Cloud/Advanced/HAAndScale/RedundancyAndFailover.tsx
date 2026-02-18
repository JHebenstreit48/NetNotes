import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RedundancyAndFailover = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/HAAndScale/RedundancyAndFailover';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Redundancy & Failover" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RedundancyAndFailover;
