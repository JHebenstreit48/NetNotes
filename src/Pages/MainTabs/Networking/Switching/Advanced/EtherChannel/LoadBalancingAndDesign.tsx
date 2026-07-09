import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LoadBalancingAndDesign = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EtherChannel/LoadBalancingAndDesign';

  return (
    <>
      <PageLayout>
        <PageTitle title="Load Balancing & Design" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancingAndDesign;