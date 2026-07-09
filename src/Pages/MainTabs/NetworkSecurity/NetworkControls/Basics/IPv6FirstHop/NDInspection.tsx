import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
