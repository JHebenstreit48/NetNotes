import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const RouterModels = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/RouterModels';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Router Models" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RouterModels;