import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const Interfaces = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/Interfaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="Devices & Models - Routers - Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Interfaces;