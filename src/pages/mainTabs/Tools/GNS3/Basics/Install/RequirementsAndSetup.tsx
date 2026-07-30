import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RequirementsAndSetup = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/Install/RequirementsAndSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Requirements & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RequirementsAndSetup;
