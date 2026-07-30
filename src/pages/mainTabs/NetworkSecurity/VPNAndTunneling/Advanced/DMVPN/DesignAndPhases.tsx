import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
