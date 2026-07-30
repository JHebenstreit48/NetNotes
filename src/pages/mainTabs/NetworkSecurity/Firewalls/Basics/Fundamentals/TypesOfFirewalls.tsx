import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const TypesOfFirewalls = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/Fundamentals/TypesOfFirewalls';

  return (
    <>
      <PageLayout>
        <PageTile title="Firewalls - Fundamentals - Types of Firewalls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypesOfFirewalls;