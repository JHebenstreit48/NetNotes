import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
