import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaVsSignalingSymptoms = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/Foundations/MediaVsSignalingSymptoms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Media vs Signaling Symptoms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaVsSignalingSymptoms;
