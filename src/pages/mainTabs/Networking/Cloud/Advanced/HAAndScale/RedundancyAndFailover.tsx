import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
