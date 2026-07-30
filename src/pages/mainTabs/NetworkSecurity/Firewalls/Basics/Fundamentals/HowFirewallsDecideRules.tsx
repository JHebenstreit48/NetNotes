import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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