import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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