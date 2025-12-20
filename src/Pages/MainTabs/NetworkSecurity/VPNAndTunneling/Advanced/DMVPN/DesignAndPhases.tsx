import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DesignAndPhases = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/DesignAndPhases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Design & Phases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DesignAndPhases;
