import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
