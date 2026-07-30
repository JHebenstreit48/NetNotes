import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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