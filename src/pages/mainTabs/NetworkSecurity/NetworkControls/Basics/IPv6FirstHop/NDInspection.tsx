import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NDInspection = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Basics/IPv6FirstHop/NDInspection';

  return (
    <>
      <PageLayout>
        <PageTitle title="ND Inspection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NDInspection;
