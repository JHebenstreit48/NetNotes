import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SignaturesAndThresholds = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines/SignaturesAndThresholds';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Signatures & Thresholds" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SignaturesAndThresholds;
