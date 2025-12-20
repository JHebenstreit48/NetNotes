import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebugWorkflow = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Troubleshooting/DebugWorkflow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debug Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebugWorkflow;
