import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorLog = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ErrorLog';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Log" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorLog;
