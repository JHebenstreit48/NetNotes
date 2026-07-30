import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
