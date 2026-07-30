import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const IntrusionDetection = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts/IntrusionDetection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intrusion Detection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntrusionDetection;
