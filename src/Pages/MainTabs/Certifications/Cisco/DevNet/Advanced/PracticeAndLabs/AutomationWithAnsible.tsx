import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutomationWithAnsible = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/PracticeAndLabs/AutomationWithAnsible';

  return (
    <>
      <PageLayout>
        <PageTitle title="Automation with Ansible" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationWithAnsible;
