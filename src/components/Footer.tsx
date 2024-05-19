import  Socials  from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-sky-600 py-12 border-t-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials containerStyles="flex gap-x-6 xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white
            dark:hover:text-primary transition-all"
          />
          {/* copyright */}

          <div className="text-black">
            Copyright &copy; Malcolm Mutare. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  ) 
}

export default Footer