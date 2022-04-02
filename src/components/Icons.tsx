import icons from "../assets/icons.svg";

interface IconsProps{
    className: string
}

const Icons:React.FC<IconsProps> = ({className}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${className}`} />
        </svg>
    )
}

export default Icons;