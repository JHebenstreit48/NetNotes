import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
