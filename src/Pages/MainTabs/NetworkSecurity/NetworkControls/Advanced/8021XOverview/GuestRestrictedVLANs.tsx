import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const GuestRestrictedVLANs = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/8021XOverview/GuestRestrictedVLANs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Guest / Restricted VLANs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GuestRestrictedVLANs;
