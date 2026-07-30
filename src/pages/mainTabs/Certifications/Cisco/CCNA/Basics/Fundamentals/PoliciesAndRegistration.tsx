import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PoliciesAndRegistration = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Overview/PoliciesAndRegistration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Policies & Registration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PoliciesAndRegistration;
