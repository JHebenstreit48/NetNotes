import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
