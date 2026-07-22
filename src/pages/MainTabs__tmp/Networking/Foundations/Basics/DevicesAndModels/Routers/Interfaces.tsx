import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const Interfaces = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/Interfaces';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Interfaces;