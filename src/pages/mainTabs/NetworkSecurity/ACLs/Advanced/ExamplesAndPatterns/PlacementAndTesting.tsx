import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PlacementAndTesting = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns/PlacementAndTesting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Placement & Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlacementAndTesting;
