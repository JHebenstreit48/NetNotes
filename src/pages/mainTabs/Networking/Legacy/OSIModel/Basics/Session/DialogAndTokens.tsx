import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DialogAndTokens = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Session/DialogAndTokens';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dialog & Tokens" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DialogAndTokens;
