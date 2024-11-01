import { useLoaderData, useParams } from "react-router-dom"

const CareerDetail = () => {
    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>career Details For {career.title} </h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam reprehenderit quidem hic eius animi ad itaque, dolor dicta iure veniam quisquam. Quo inventore assumenda necessitatibus soluta alias tempora eius.</p>
        </div>
    </div>
  )
}

export default CareerDetail


export const CareerDetailsLoader = async ({params}) => {
    const {id} = params

    const res = await fetch(`http://localhost:4000/careers/${id}`)
    if (!res.ok){
        throw new Error("Couldn't find that career")
    }
    return res.json()
}