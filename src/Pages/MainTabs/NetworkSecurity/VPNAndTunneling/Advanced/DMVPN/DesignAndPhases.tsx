import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DesignAndPhases = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/DesignAndPhases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Design & Phases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DesignAndPhases;
