import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
