import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

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