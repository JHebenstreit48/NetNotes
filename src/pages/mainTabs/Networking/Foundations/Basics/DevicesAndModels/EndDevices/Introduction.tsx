import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/EndDevices/Introduction';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - End Devices - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;