import { useState } from "react"

interface FormData {
    'USER_NICKNAME' : string;
    'USER_EMAIL' : string;
    'USER_PW' : string;
    'USER_PHONE' : string;
}

export default function useSignUpForm(){

    const [formData, setFormData] = useState<FormData> ({
        "USER_NICKNAME" : '',
        'USER_EMAIL' : "",
        'USER_PW' : "",
        'USER_PHONE' : ""
    })

    const handleInputChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setFormData((prevData)=>({...prevData, [name] : value}))
    }
    return {formData , handleInputChange};
}

