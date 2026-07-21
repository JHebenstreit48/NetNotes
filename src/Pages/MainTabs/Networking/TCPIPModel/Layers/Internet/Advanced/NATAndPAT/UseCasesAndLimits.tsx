import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const UseCasesAndLimits = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/UseCasesAndLimits';

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
