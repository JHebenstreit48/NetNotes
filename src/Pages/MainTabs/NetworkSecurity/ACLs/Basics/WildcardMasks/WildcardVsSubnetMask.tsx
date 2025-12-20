import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WildcardVsSubnetMask = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/WildcardMasks/WildcardVsSubnetMask';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wildcard vs Subnet Mask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WildcardVsSubnetMask;
