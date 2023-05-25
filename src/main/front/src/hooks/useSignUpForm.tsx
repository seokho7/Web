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
    const [modifyState, setModifyState] = useState(false);
    const [nickNamePass, setNicknamePass] = useState(false);

    const [actionSw , setActionSw] = useState(false);

    const keydownHandle = (e : React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
    }

    const handleInputChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        // if(formData.userNickname.length > value.length){
        //     setModifyState(true);  
        // }else{
        //     setModifyState(false);
        // }
        // console.log(modifyState)
        if(value.length > 0){
            setNullCheck(false);
        }else{
            setNullCheck(true)
        }
        setFormData((prevData)=>({...prevData, [name] : value}))
    }

    const checkNick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActionSw(true);
        setModifyState(false);
        let targetNickname = formData["userNickname"];
        
        let checkUrl = "/members/checkNickname";

        fetch(checkUrl,{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : targetNickname
        })
        .then(res=> res.text())
        .then(data => {
            data == "true" ? setNicknamePass(true) : setNicknamePass(false);
        });
    }

    return {formData , handleInputChange ,keydownHandle ,  nullCheck , modifyState , checkNick , nickNamePass , actionSw};


}

