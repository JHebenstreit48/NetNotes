import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const HowFirewallsDecideRules = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/Fundamentals/HowFirewallsDecideRules';

  return (
    <>
      <PageLayout>
        <PageTile title="Firewalls - Fundamentals - How Firewalls Decide: Rules & Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HowFirewallsDecideRules;