import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
