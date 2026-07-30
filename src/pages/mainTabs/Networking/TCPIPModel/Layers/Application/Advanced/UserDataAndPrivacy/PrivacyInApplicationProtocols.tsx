import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
