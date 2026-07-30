import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
