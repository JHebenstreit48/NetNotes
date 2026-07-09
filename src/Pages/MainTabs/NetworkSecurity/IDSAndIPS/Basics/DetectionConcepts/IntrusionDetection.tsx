import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
