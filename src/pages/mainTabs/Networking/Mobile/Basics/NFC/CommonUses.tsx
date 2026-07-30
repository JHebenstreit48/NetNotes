import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonUses = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/NFC/CommonUses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Uses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonUses;
