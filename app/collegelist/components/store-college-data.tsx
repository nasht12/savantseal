"use client";
import React, { useEffect, useState } from 'react';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

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

export default function College() {
//   const [colleges, setColleges] = useState<College[]>([]);
const [fetched, setFetched] = useState(0);
    const [pageNo, setPageNo] = useState(24);
//   const storeData = useMutation(api.college.storeCollegeData);
  const itemsPerPage = 40;
  const currentPage = 24;
  async function handleButtonClick() {
    // Define the data to be passed to the storeData mutation
    const res = await fetch(
      `https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=RkKx2oqf53kdFKXiQCQloGt4Tz1SlLbzNNb1NOGD&page=${currentPage}&per_page=${itemsPerPage}`
    );
    let rawData = await res.json();
    rawData = rawData.results
    console.log(rawData);
    const data: College[] = rawData.map((item: any) => {
      const {
        latest: {
          school: { name, city, state, school_url },
          student: { size, grad_students },
          programs: { cip_4_digit },
          cost: {
            tuition: { in_state, out_of_state },
          },
          admissions: {
            admission_rate: { overall },
          },
        },
      } = item;

      return {
        name,
        city,
        state,
        school_url,
        size,
        grad_students,
        cip_4_digit,
        in_state,
        out_of_state,
        admissionRate: overall*100,
      };
    });

    // Store the data in the Convex database
    // await storeData({ data });
  }

  async function handleButtonClick2() {
    let currentPage = 24;
    let totalFetched = 0;

    while (true) {
      // Fetch a page of data
      const res = await fetch(
        `https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=RkKx2oqf53kdFKXiQCQloGt4Tz1SlLbzNNb1NOGD&page=${currentPage}&per_page=${itemsPerPage}`
      );
      let resData = await res.json();
      let rawData = resData.results;
      console.log(rawData);
      const data: College[] = rawData.map((item: any) => {
        const {
          latest: {
            school: { name, city, state, school_url },
            student: { size, grad_students },
            cost: {
              tuition: { in_state, out_of_state },
            },
            admissions: {
              admission_rate: { overall },
            },
          },
        } = item;

        return {
          name,
          city,
          state,
          school_url,
          size,
          grad_students,
          in_state,
          out_of_state,
          admissionRate: overall * 100,
        };
      });
    //   setColleges(data);
      console.log(data);
    //   await storeData({ data });
      totalFetched += data.length;
      setFetched(totalFetched);

      // If all data has been fetched, break the loop
      if (totalFetched >= resData.metadata.total) {
        break;
      }
      // Otherwise, move on to the next page
      currentPage++;
      setPageNo(currentPage);

    }
  }


  return (
    <div>
      <Button onClick={handleButtonClick} disabled>Fetch first 10 and Store College Data</Button>
      <Button onClick={handleButtonClick2} disabled>Fetch All and store</Button>
      <div>
        {fetched}
        <br />
        {pageNo}
      </div>
    </div>
  );
}
