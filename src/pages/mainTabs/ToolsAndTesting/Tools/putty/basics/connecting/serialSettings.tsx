import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SerialSettings = () => {
  const markdownFilePath = 'ToolsAndTesting/Tools/putty/basics/connecting/serialSettings';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tools - PuTTY - Basics - Serial Settings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SerialSettings;