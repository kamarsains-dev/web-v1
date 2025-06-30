import Nav from "@/components/ui/nav";

const MobileNav = () => {
    return (
        <div className="lg:hidden fixed bottom-0 w-full bg-white z-50 p-2 border-t-2">
          <Nav/>  
        </div>
    );
};

export default MobileNav;