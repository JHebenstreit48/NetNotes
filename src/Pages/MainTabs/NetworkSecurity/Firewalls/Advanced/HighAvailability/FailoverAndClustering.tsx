import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FailoverAndClustering = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/HighAvailability/FailoverAndClustering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Failover & Clustering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FailoverAndClustering;
