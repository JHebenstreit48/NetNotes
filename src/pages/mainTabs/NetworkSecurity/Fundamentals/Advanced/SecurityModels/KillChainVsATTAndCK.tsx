import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KillChainVsATTAndCK = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Advanced/SecurityModels/KillChainVsATTAndCK';

  return (
    <>
      <PageLayout>
        <PageTitle title="Kill Chain vs ATT&CK" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KillChainVsATTAndCK;
