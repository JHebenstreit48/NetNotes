import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsTheCCNP = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/Overview/WhatIsTheCCNP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is the CCNP?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsTheCCNP;
