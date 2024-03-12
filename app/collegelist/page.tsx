import React from 'react'
import AllColleges from './components/all-colleges'
import CollegeListTab from './components/collegelist-tab';

export default function CollegeList() {
  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
      <CollegeListTab />
    </div>
  );
}
