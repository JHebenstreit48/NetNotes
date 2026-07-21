import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
