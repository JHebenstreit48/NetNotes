import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const Servers = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/EndDevices/Servers';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - End Devices - Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Servers;