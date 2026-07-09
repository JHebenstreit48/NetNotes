import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReducingFalsePositives = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/ReducingFalsePositives';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reducing False Positives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReducingFalsePositives;
