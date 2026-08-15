import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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