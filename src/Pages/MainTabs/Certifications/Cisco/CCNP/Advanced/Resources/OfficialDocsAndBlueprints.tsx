import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OfficialDocsAndBlueprints = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/Resources/OfficialDocsAndBlueprints';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Official Docs & Blueprints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OfficialDocsAndBlueprints;
