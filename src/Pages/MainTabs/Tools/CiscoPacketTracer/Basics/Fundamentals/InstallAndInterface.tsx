import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallAndInterface = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Fundamentals/InstallAndInterface';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Install & Interface" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndInterface;
