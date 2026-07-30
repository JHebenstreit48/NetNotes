import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
