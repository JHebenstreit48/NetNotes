import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
