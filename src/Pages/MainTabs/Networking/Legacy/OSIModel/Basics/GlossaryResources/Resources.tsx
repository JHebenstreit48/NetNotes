import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Resources = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/GlossaryResources/Resources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Resources;
