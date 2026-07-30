import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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