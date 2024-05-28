"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const blog = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex items-center">
          <CardTitle>Blog Section</CardTitle>
          <CardDescription>
            Find all the latest ReAct News here in our blog section
          </CardDescription>
        </CardHeader>
        <section className="flex flex-row justify-around mb-10">
          <Card className="rounded-small rounded-small">
            <Image className="ml-5 mr-5 mt-5 rounded-md"
              src="/assets/blog/react.19.png"
              alt="blog image"
              width={400}
              height={400}
            >
  
            </Image>
            <CardHeader>
              <CardTitle>
                ReAct 19 Is Here!!!
              </CardTitle>
              <CardDescription>React 19 is the upcoming version of the popular <br/>JavaScript library,
              focused on improving performance, <br/>adding new features, and enhancing developer experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-sky-600">Read More</Button>
            </CardContent>
          </Card>
          <Card>
          <Image className="ml-5 mr-5 mt-5 rounded-md"
              src="/assets/blog/react.19.3.png"
              alt="blog image"
              width={400}
              height={400}
            >
            </Image>
            <CardHeader>
              <CardTitle>Data Binding in React!!!!</CardTitle>
              <CardDescription>Data binding in React refers to the process of synchronizing <br/> 
              data between the UI and the state, allowing automatic <br/> 
              updates to the UI when the state changes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-sky-600">Read More...</Button>
            </CardContent>
          </Card>
        </section>
      </Card>
    </>
  );
};

export default blog;
