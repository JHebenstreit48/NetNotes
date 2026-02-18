import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StormControl = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EdgeServices/StormControl';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Storm Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StormControl;