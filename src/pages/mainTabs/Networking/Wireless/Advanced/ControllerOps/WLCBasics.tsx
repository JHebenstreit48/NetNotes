import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
