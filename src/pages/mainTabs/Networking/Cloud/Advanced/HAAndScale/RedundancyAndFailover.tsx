import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RedundancyAndFailover = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/HAAndScale/RedundancyAndFailover';

  return (
    <>
      <PageLayout>
        <PageTitle title="Redundancy & Failover" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RedundancyAndFailover;
