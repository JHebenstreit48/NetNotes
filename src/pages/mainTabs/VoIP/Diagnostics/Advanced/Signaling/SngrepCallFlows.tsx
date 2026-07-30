import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SngrepCallFlows = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Signaling/SngrepCallFlows';

  return (
    <>
      <PageLayout>
        <PageTitle title="sngrep — Call Flows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SngrepCallFlows;
