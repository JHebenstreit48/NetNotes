import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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