import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
