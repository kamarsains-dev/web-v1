import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import InfoCard from "./component/info-card";

const TryOut = () => {
    return (
        <div className="container flex flex-row-reverse gap-[48px] px-6 justify-center items-center">
            <StickyWrapper>
                <InfoCard/>
                <InfoCard/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="bg-red-800">
                    my feed
                </div>
            </FeedWrapper>
        </div>
    )
}

export default TryOut;