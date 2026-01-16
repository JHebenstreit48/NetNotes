import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CablingAndConsole = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/DevicesAndCabling/CablingAndConsole';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cabling & Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CablingAndConsole;
