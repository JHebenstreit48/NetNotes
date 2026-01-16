import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TFTPHTTPServersAndFileLayouts = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Provisioning/TFTPHTTPServersAndFileLayouts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TFTP/HTTP(S) Servers & File Layouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TFTPHTTPServersAndFileLayouts;
