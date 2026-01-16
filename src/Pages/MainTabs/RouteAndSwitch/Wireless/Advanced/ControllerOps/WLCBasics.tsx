import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WLCBasics = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/ControllerOps/WLCBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WLC Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WLCBasics;
