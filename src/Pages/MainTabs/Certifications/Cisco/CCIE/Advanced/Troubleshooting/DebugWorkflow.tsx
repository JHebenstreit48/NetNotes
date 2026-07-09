import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
