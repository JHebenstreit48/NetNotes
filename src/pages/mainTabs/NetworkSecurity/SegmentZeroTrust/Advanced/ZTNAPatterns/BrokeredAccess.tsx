import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
