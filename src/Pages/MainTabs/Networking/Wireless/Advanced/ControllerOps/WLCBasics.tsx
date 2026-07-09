import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WLCBasics = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/ControllerOps/WLCBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="WLC Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WLCBasics;
