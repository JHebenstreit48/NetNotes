import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
