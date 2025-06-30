const Info = () => {
    return(
        <div>
            <span className="md:flex hidden justify-around font-medium mt-4 text-gray-400 text-sm ">
                <a href="" className="hover:text-gray-600 hover:font-bold">About</a>
                <a href="/terms" className="hover:text-gray-600 hover:font-bold">Term</a>
                <a href="/privacy" className="hover:text-gray-600 hover:font-bold">Privacy</a>
            </span>
        </div>
    );
};

export default Info; 