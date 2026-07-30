import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
