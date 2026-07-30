import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
