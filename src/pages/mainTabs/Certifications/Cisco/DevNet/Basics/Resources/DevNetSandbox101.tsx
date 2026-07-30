import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
