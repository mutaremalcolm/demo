"use client";

import React from "react";
import Image from "next/image";
import withAuth from "@/components/ProtectedRoutes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Card className="border-sky-600 ml-5 mr-5">
        <CardHeader className="flex items-center">
          <CardTitle className="text-sky-600">Blog Section</CardTitle>
          <CardDescription className="text-sky-600">
            Find all the latest ReAct News here in our blog section
          </CardDescription>
        </CardHeader>
        <section className="flex flex-row justify-around mb-10">
          <Card className="border-sky-600 rounded-small rounded-small">
            <Image className="ml-5 mr-5 mt-5 rounded-md"
              src="/assets/blog/react.19.png"
              alt="blog image"
              width={400}
              height={300}
            >
  
            </Image>
            <CardHeader>
              <CardTitle className="text-sky-600">
                ReAct 19 Is Here!!!
              </CardTitle>
              <CardDescription className="text-sky-600">React 19 is the upcoming version of the popular <br/>JavaScript library,
              focused on improving performance, <br/>adding new features, and enhancing developer experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='https://react.dev/blog/2024/04/25/react-19' target='new'>
              <Button className="bg-sky-600">Read More</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-sky-600">
          <Image className="ml-5 mr-5 mt-5 rounded-md"
              src="/assets/blog/react.19.3.png"
              alt="blog image"
              width={400}
              height={300}
            >
            </Image>
            <CardHeader>
              <CardTitle className="text-sky-600">Data Binding in React!!!!</CardTitle>
              <CardDescription className="text-sky-600">Data binding in React refers to the process of synchronizing <br/> 
              data between the UI and the state, allowing automatic <br/> 
              updates to the UI when the state changes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='https://handsontable.com/blog/understanding-data-binding-in-react#:~:text=Data%20binding%20in%20React%20can,various%20examples%20and%20use%20cases.' 
                    target="new">
              <Button className="bg-sky-600">Read More...</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </Card>
    </>
  );
};

export default withAuth(Blog);
