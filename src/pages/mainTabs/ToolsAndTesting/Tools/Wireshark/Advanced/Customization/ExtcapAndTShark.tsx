import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
