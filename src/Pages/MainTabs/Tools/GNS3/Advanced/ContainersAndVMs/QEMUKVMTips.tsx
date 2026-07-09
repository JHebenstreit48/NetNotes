import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
