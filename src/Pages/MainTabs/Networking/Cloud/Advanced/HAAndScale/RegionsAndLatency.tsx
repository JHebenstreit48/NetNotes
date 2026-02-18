import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RegionsAndLatency = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/HAAndScale/RegionsAndLatency';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Regions & Latency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RegionsAndLatency;
