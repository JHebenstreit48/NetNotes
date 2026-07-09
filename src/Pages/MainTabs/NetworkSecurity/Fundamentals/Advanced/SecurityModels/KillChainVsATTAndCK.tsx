import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
