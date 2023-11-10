import "./Title.css"

type TitleProps = {
    title: string
}

const Title:React.FC<TitleProps> = ({ title }) => {
    return(
        <h2 className="title-caption">{title}</h2>
    )
}

export default Title

