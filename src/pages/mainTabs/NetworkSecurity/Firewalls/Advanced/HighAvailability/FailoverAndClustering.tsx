import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FailoverAndClustering = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/HighAvailability/FailoverAndClustering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Failover & Clustering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FailoverAndClustering;
