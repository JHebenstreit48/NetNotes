import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseCasesAndLimits = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/UseCasesAndLimits';

  return (
    <>
      <PageLayout>
        <PageTitle title="Use Cases & Limits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseCasesAndLimits;
