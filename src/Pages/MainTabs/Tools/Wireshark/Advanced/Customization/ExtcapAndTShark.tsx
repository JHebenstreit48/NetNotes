import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExtcapAndTShark = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Customization/ExtcapAndTShark';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Extcap & TShark" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExtcapAndTShark;
