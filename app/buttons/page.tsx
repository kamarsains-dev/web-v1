import { Button } from "@/components/ui/button";

const ButtonPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button variant="default"
            >Default
            </Button>
            <Button variant="primary"
            >Primary
            </Button>
            <Button variant="outline"
            >Outlines
            </Button>
            <Button variant="secondary"
            >
            secondary
            </Button>
            <Button variant="tertiary"
            >
            tertiary
            </Button>
        </div>
    );
};

export default ButtonPage;