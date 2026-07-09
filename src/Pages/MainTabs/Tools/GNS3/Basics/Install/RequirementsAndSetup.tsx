import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
