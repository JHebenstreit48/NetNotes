import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TFTPHTTPServersAndFileLayouts = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Provisioning/TFTPHTTPServersAndFileLayouts';

  return (
    <>
      <PageLayout>
        <PageTitle title="TFTP/HTTP(S) Servers & File Layouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TFTPHTTPServersAndFileLayouts;
