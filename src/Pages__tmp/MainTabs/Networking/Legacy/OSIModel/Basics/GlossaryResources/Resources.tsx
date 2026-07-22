import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
