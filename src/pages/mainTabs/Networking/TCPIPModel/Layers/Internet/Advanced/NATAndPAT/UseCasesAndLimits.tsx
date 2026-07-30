import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
