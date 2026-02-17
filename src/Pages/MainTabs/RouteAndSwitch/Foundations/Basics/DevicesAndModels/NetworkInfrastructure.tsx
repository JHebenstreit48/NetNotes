import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkInfrastructure = () => {
  const markdownFilePath = 'RouteAndSwitch/Foundations/Basics/DevicesAndModels/NetworkInfrastructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="Fundamentals - Devices & Models - Network Infrastructure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkInfrastructure;