import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
