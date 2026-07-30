import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
