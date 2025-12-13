import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplatesAndProfiles = () => {
  const markdownFilePath =
    'RouteAndSwitch/Cloud/Basics/Provisioning/TemplatesAndProfiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - Templates & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndProfiles;