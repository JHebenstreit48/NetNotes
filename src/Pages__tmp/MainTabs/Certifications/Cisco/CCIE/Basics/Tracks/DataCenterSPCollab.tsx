import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DataCenterSPCollab = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Tracks/DataCenterSPCollab';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Center • SP • Collab" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataCenterSPCollab;
