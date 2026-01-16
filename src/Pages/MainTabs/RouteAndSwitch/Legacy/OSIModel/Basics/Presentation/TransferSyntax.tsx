import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TransferSyntax = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/Presentation/TransferSyntax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Transfer Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransferSyntax;
