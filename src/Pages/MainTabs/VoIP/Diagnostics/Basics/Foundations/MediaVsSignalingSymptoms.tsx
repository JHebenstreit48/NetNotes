import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
