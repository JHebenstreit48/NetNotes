import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
