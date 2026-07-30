import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ExtcapAndTShark = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Customization/ExtcapAndTShark';

  return (
    <>
      <PageLayout>
        <PageTitle title="Extcap & TShark" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExtcapAndTShark;
