import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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