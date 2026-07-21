import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WildcardVsSubnetMask = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/WildcardMasks/WildcardVsSubnetMask';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wildcard vs Subnet Mask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WildcardVsSubnetMask;
