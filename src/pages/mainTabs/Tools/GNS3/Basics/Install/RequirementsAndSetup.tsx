import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
