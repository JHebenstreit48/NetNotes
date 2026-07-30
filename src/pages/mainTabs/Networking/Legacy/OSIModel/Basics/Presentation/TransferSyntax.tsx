import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
