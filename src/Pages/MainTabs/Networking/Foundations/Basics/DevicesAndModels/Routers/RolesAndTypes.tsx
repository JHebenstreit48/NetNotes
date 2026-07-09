import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const RolesAndTypes = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/RolesAndTypes';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Roles and Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RolesAndTypes;