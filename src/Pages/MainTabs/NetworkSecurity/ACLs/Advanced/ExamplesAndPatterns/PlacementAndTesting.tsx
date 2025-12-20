import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlacementAndTesting = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns/PlacementAndTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Placement & Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlacementAndTesting;
