import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicRouterSetup = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/BasicRouterSetup';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Basic Router Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicRouterSetup;