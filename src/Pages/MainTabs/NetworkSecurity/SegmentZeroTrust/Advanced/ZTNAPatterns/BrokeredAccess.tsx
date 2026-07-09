import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BrokeredAccess = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Advanced/ZTNAPatterns/BrokeredAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Brokered Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BrokeredAccess;
