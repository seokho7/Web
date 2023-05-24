import { useState } from "react"

interface FormData {
    'userNickname' : string;
    'userEmail' : string;
    'userPw' : string;
    'userPhone' : string;
}

export default function useSignUpForm(){

    const [formData, setFormData] = useState<FormData> ({
        "userNickname" : '',
        'userEmail' : "",
        'userPw' : "",
        'userPhone' : ""
    })
    const [nullCheck, setNullCheck] = useState(true);

    const handleInputChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        if(value.length > 0){
            setNullCheck(false);
        }else{
            setNullCheck(true)
        }
        setFormData((prevData)=>({...prevData, [name] : value}))
    }
    return {formData , handleInputChange , nullCheck};
}

