import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PortSecurity = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EdgeServices/PortSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Port Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortSecurity;