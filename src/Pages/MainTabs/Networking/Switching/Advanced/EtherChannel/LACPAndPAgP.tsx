import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LACPAndPAgP = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EtherChannel/LACPAndPAgP';

  return (
    <>
      <PageLayout>
        <PageTitle title="LACP & PAgP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LACPAndPAgP;