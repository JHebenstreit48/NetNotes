import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLIAccess = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/ConfigurationBasics/CLIAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAccess;
