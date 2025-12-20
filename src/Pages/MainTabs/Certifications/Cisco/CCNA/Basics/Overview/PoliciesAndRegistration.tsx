import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PoliciesAndRegistration = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Overview/PoliciesAndRegistration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Policies & Registration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PoliciesAndRegistration;
