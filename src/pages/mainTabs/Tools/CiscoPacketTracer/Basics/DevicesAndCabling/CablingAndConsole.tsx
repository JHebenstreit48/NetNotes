import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CablingAndConsole = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/DevicesAndCabling/CablingAndConsole';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cabling & Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CablingAndConsole;
