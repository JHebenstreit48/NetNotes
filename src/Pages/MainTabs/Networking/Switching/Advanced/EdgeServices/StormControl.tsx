import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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