import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ProvisioningAndProfiles = () => {
  const markdownFilePath = 'VoIP/Tools/SoftphonesAndClients/BriaAndLinphone/ProvisioningAndProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Provisioning & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProvisioningAndProfiles;
