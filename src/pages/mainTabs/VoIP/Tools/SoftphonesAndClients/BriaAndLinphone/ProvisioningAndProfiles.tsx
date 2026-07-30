import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
