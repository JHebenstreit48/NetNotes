import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';
// import { useNavigate } from 'react-router-dom';
// import '@/scss/PageStyles/GlossaryBack.scss';

const HostsAndPorts = () => {
  const markdownFilePath =
    'Networking/Switching/Basics/Glossary/HostsAndPorts';

  // const navigate = useNavigate();

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - Hosts & Ports" />

        {/*
        <div>
          <button
            className="glossaryBack"
            onClick={() => navigate(-1)}
          >
            ← Back to Previous
          </button>
        </div>
        */}

        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostsAndPorts;