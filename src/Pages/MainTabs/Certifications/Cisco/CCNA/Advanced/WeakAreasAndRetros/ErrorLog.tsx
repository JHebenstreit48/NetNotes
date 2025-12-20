import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorLog = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ErrorLog';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Error Log" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorLog;
