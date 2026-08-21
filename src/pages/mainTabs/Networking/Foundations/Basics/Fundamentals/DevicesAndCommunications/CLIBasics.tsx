import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLIBasics = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/DevicesAndCommunications/CLIBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Networking - Foundations - Fundamentals - CLI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIBasics;