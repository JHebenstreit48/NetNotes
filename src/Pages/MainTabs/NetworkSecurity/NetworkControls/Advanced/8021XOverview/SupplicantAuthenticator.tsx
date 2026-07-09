import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SupplicantAuthenticator = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/8021XOverview/SupplicantAuthenticator';

  return (
    <>
      <PageLayout>
        <PageTitle title="Supplicant ↔ Authenticator" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SupplicantAuthenticator;
