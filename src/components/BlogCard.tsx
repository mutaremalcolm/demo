import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";



interface Props {
    project: any;
  }


const BlogCard = ({ project}: Props)=> {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                {/* { image } */}
                <div className="relative w-full h-[300px] flex items-center justify-center
                bg-sky-600 dark:bg-secondary/40 xl:bg-assets-blog-react19  
                xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
                >
                    <Image 
                    className="absolute bottom-0 shadow-2xl m-2 mt-2" 
                    src={project.image} 
                    width={400} 
                    height={400} 
                    alt="" 
                    priority
                    />
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6 bg-sky-600 text-black">
                {/* <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
                {project.category}
                </Badge> */}
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
        </Card>
);
}

export default BlogCard