import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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