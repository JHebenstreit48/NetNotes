import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const OfficialDocsAndBlueprints = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/Resources/OfficialDocsAndBlueprints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Official Docs & Blueprints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OfficialDocsAndBlueprints;
