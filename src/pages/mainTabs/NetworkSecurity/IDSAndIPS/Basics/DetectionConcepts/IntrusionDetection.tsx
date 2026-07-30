import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
