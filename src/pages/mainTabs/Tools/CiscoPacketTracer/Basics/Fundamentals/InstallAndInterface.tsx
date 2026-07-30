import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const InstallAndInterface = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Fundamentals/InstallAndInterface';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install & Interface" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndInterface;