type Image = {
    id?: number
    path?: string,
    description?: string
}


const Image = ({ path, description }: Image) => {
    return (
        <div>
            <img src={path} alt={description}/>
        </div>
    )
}

export default Image