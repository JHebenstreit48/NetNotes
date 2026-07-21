import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
