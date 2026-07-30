import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

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