import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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