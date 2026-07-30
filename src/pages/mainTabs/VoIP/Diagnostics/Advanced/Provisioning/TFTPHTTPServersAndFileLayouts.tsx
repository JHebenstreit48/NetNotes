import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
