import TabsUnderlinedDemo from "./component/tabs-underlined";

const Setting = () => {
    return (
        <div className="container flex flex-col max-w-[1000px] w-full h-full py-5 pb-20 mt-13">
            <h1 className="text-2xl font-bold my-5">Setting</h1>
            <div className="w-full">
                <TabsUnderlinedDemo />
            </div>
        </div>
    );
};

export default Setting;