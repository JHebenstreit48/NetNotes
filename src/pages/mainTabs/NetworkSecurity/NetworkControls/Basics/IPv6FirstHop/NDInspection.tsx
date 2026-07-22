import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
