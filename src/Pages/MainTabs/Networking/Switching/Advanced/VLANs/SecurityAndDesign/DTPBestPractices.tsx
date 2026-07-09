import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DTPBestPractices = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/SecurityAndDesign/DTPBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="DTP Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DTPBestPractices;