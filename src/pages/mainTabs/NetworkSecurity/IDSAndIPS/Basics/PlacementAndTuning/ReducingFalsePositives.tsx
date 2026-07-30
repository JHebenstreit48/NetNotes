import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
