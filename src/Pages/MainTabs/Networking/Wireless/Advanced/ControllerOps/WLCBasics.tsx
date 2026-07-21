import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
