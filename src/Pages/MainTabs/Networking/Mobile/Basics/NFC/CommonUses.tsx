import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
