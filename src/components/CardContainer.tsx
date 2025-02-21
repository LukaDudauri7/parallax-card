import { CardContainerProps } from "../types/types";
import { cn } from "../utils/cn";

function CardContainer({ children, className }: CardContainerProps){

    return <div className="flex items-center justify-between py-20">
        <div className={cn("relative w-[500px] flex items-center", className)}>
            {children}
        </div>
    </div>
}

export default CardContainer;