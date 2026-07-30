import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TransferSyntax = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Presentation/TransferSyntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Transfer Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransferSyntax;
