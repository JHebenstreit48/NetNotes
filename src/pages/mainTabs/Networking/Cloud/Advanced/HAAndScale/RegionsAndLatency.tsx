import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
