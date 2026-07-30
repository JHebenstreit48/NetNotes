import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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