import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PrivacyInApplicationProtocols = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/PrivacyInApplicationProtocols';

  return (
    <>
      <PageLayout>
        <PageTitle title="Privacy in Application Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrivacyInApplicationProtocols;
