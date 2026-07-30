import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const HostHypervisorControls = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation/HostHypervisorControls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Host / Hypervisor Controls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostHypervisorControls;
