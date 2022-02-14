import React from 'react';
import HeroJobs from './components/HeroJobs';
import ComponentJobsOne from './components/ComponentJobsOne';
import ComponentJobsTwo from './components/ComponentJobsTwo';
import ComponentJobsTree from './components/ComponentJobsTree';

function Jobs() {
  return (
    <>
      <HeroJobs />
      <ComponentJobsOne />
      <ComponentJobsTwo />
      <ComponentJobsTree />
    </>
  )
}

export default Jobs;