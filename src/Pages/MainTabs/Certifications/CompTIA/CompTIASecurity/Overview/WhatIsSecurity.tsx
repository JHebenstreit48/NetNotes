import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsSecurity = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/Overview/WhatIsSecurity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is Security+?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsSecurity;
