import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
