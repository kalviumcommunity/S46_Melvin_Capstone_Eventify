import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar"
import ImageUpload from "../firebase/ImageUpload"

function Profile() {

    const [showUpload,setShowUpload] = useState(false)
    const [profileImageUrl,setProfileImageUrl] = useState("")

    const handlePopup = () =>{
        setShowUpload(false)
    }

    const handleCompletion = (value) => {
        setProfileImageUrl(value)
    }

    useEffect(() => {
        console.log(showUpload)
    },[showUpload])

  return (
    <>
      <Navbar/>
      <div className="w-full min-h-[95dvh] gradientbg flex items-center justify-center">
         <img onClick={() => setShowUpload(true)} className="size-40 border-2 border-red-500 rounded-full cursor-pointer" src={profileImageUrl}/>
      </div>
      {showUpload && <ImageUpload handleCompletion={handleCompletion} handlePopup={handlePopup}/>}
    </>
  );
}

export default Profile;