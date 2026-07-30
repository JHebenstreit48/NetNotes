import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
