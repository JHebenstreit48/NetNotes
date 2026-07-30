import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NATFundamentals = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/StatefulAndNAT/NATFundamentals';

  return (
    <>
      <PageLayout>
        <PageTitle title="NAT Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NATFundamentals;
