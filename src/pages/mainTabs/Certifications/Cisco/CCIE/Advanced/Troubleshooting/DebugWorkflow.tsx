import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DebugWorkflow = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Troubleshooting/DebugWorkflow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debug Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebugWorkflow;
