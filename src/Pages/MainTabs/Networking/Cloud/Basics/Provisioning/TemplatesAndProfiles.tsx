import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplatesAndProfiles = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/Provisioning/TemplatesAndProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Templates & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndProfiles;