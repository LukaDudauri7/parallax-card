import { CardContainerProps } from "../types/types";

function CardContainer({ children, className }: CardContainerProps){

    return <div className="flex items-center justify-between py-20">
        <div className="relative flex items-center">
            {children}
        </div>
    </div>
}

export default CardContainer;