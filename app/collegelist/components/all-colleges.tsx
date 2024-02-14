"use client";
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function AllColleges() {
  const [wordCount, setWordCount] = useState(0);
  const [colleges, setColleges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [metadata, setMetadata] = useState();
  const itemsPerPage = 20;
  const pageLimit = 5;

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=RkKx2oqf53kdFKXiQCQloGt4Tz1SlLbzNNb1NOGD&page=${currentPage}&per_page=${itemsPerPage}`);
      const data = await res.json();
      setColleges(data.results);  
      setMetadata(data.metadata);
      setTotalPages(Math.ceil(data.metadata.total / itemsPerPage));
      setIsLoading(false);
    }
    fetchColleges();
  }, [currentPage]);

  const handleChange = (event) => {
    const words = event.target.value.split(',').filter(Boolean).map(word => word.trim());
    setWordCount(words.length);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(colleges);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {colleges &&
          colleges.map((college) => (
            <div className="flex flex-shrink w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle>{college.latest.school.name}</CardTitle>
                  <CardDescription>
                    {college.latest.school.city}, {college.latest.school.state}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View</Button>
                  <Link
                    href={
                      college.latest.school.school_url.startsWith("http://") ||
                      college.latest.school.school_url.startsWith("https://")
                        ? college.latest.school.school_url
                        : `https://${college.latest.school.school_url}`
                    }
                  >
                    <Button>
                      {college.latest.school.school_url.startsWith("http://") ||
                      college.latest.school.school_url.startsWith("https://")
                        ? college.latest.school.school_url
                        : `https://${college.latest.school.school_url}`}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center p-2 gap-2">
        <Button
          className=""
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>

        {Array.from({ length: Math.min(pageLimit, totalPages) }, (_, i) => {
          const pageNumber =
            i + 1 + pageLimit * Math.floor((currentPage - 1) / pageLimit);
          return (
            <Button
              key={pageNumber}
              className={` ${
                pageNumber === currentPage ? "active bg-slate-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}

        <Button
          className=""
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AllColleges;
