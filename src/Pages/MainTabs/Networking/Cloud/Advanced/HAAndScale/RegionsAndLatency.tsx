import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RegionsAndLatency = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/HAAndScale/RegionsAndLatency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Regions & Latency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RegionsAndLatency;
