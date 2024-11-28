import Component from "../components/button"
import { Link } from "react-router-dom"
function HomePage(){
    return (
<div className=" flex flex-col items-center justify-center h-screen w-screen bg-[#FAF7F0] gap-[70px]">
    <Link to='./pages/RoomPage'><Component name="Rooms"/></Link>   
    <Link to='./pages/'><Component name="Bills"/></Link> 
    <Link to='./pages/'><Component name="Needs"/></Link> 

    </div>)
}
export default HomePage