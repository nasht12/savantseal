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
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type College = {
  latest: {
    school: {
      name: string;
      city: string;
      state: string;
      school_url: string;
    };
    student: {
      size: number;
      grad_students: number;
    };
    programs: {
      cip_4_digit: [];
    };
    cost: {
      tuition: {
        in_state: number;
        out_of_state: number;
      };
    };
    admissions: {
      admission_rate: {
        overall: number;
      };
    };
  };
};

function AllColleges() {
  const [wordCount, setWordCount] = useState(0);
  const [colleges, setColleges] = useState<College[]>([]);;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [metadata, setMetadata] = useState();
  const [prettyJson, setPrettyJson] = useState('');
  const itemsPerPage = 10;
  const pageLimit = 10;

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=RkKx2oqf53kdFKXiQCQloGt4Tz1SlLbzNNb1NOGD&page=${currentPage}&per_page=${itemsPerPage}`);
      const data = await res.json();
      setColleges(data.results);  
      setPrettyJson(JSON.stringify(data.results, null, 2));
      setMetadata(data.metadata);
      setTotalPages(Math.ceil(data.metadata.total / itemsPerPage));
      setIsLoading(false);
    }
    fetchColleges();
  }, [currentPage]);

  const handleChange = (event: any) => {
    const words = event.target.value.split(',').filter(Boolean).map((word: string) => word.trim());
    setWordCount(words.length);
  };

  const handlePageChange = (pageNumber: number) => {
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
            <div className="flex">
              <Card>
                <CardHeader>
                  <CardTitle>{college.latest.school.name}</CardTitle>
                  <CardDescription>
                    {college.latest.school.city}, {college.latest.school.state}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{college.latest.school.name}</DialogTitle>
                        <DialogDescription>
                          {college.latest.school.city},{" "}
                          {college.latest.school.state}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex gap-4 py-4">
                        <ul>
                          <li>Student Size: {college.latest.student.size}</li>
                          <li>
                            Grad Student: {college.latest.student.grad_students}
                          </li>
                          <li>
                            No. of Programs:{" "}
                            {college.latest.programs.cip_4_digit.length}
                          </li>
                          <li>
                            In-state: {college.latest.cost.tuition.in_state}
                          </li>
                          <li>
                            Out-of-state:{" "}
                            {college.latest.cost.tuition.out_of_state}
                          </li>
                          <li>
                            {college.latest.admissions.admission_rate
                              .overall && (
                              <>
                                Admission rate:{" "}
                                {college.latest.admissions.admission_rate
                                  .overall * 100}
                                %
                              </>
                            )}
                          </li>
                        </ul>
                      </div>
                      <DialogFooter>
                        {/* <Button type="submit">Save changes</Button> */}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
      <div>
      <pre>{totalPages}</pre>
      </div>
    </div>
  );
}

export default AllColleges;
