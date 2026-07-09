import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
