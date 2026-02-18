import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonUses = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/NFC/CommonUses';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Uses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonUses;
