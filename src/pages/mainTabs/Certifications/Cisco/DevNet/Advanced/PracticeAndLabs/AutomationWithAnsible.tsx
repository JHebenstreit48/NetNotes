import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
