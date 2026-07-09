import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SignaturesAndThresholds = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines/SignaturesAndThresholds';

  return (
    <>
      <PageLayout>
        <PageTitle title="Signatures & Thresholds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SignaturesAndThresholds;
