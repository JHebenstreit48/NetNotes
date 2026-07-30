import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

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