import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const URPF = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/SourceValidation/URPF';

  return (
    <>
      <PageLayout>
        <PageTitle title="uRPF (Edge)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URPF;
