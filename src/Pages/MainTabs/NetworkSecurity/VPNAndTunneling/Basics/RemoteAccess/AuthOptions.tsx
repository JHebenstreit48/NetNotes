import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuthOptions = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/AuthOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Auth Options (MFA, SAML)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthOptions;
