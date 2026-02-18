import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DialogAndTokens = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Session/DialogAndTokens';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dialog & Tokens" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DialogAndTokens;
