import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
