import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
