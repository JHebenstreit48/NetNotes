import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevNetSandbox101 = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Resources/DevNetSandbox101';

  return (
    <>
      <PageLayout>
        <PageTitle title="DevNet Sandbox 101" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevNetSandbox101;
