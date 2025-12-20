import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReducingFalsePositives = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/ReducingFalsePositives';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reducing False Positives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReducingFalsePositives;
