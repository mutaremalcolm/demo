import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { ReadMore } from "./ReadMore";



interface Props {
    project: any;
  }


const BlogCard = ({ project}: Props)=> {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                {/* { image } */}
                <div className="relative w-full h-[300px] flex items-center justify-center
                bg-sky-600 xl:bg-assets-blog-react19 xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
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
            <div className="h-full px-8 py-6 text-black">
                <h4 className="h4 mb-1">{project.name}</h4>
                <ReadMore id="read-more-text" text={project.description}/>            
            </div>
        </Card>
);
}

export default BlogCard