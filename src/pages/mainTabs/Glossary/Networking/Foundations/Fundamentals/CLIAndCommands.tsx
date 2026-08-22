import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLIAndCommands = () => {
  const markdownFilePath = 'Glossary/Networking/Foundations/Fundamentals/CLIAndCommands';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Networking - Foundations - CLI & Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAndCommands;