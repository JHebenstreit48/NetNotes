import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const NetworkInfrastructure = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkInfrastructure';

  return (
    <>
      <PageLayout>
        <PageTile title="Fundamentals - Devices & Models - Network Infrastructure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkInfrastructure;