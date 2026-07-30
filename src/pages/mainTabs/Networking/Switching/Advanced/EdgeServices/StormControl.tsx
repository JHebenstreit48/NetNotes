import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StormControl = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EdgeServices/StormControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Storm Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StormControl;