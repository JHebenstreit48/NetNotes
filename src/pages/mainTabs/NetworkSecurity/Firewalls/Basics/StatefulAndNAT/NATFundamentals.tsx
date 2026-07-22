import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
