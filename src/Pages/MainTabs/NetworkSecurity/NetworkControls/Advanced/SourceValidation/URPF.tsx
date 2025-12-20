import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const URPF = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/SourceValidation/URPF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="uRPF (Edge)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default URPF;
