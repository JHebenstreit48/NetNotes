import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QEMUKVMTips = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ContainersAndVMs/QEMUKVMTips';

  return (
    <>
      <PageLayout>
        <PageTitle title="QEMU/KVM Tips" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QEMUKVMTips;
