import { SliverText } from "@/components/ui/silver-text";
import { useState } from "react";


export default function ContactForm() {
  const [user,setUser] = useState({
    email:'',subject:'',content:'',
  })
  let name,value
  const data =(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value})
  console.log(user)
  }
  const getdata = async (e)=>{
    const{email,subject,content}=user; 
    e.preventDefault();
    const options={
    method:"POST",
    headers:{
      'Content-Type':'aplication/json'
    },
    body:JSON.stringify({
      email,subject,content
    })
    }
    const res= await fetch("https://cgi109-285d3-default-rtdb.firebaseio.com/UserData.json",options)
    console.log(res)
    if(res){
      alert("message snet");
    }
    else{
      alert("error");
    }
  }
  return (
    <>
      <form action="" className="md:w-auto w-full min-h-[500px]">
        <SliverText className="mb-4 text-4xl text-center w-full">
          Have a question ?
        </SliverText>
        <div className="flex flex-col">
          <label htmlFor="" className="font-mono text-[20px] mb-1">
            Email
          </label>
          <input
            type="text"
            name="email"
             value={user.email}
             onChange={data}

             autoComplete="off"
            className="md:w-[600px] w-full bg-transparent pl-2 fon py-3 text-white rounded  border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4 focus:placeholder:opacity-0 "
            placeholder="Example@example.com"
          />
        </div>
        <div className="flex mt-3 flex-col">
          <label htmlFor="" className="font-mono text-[20px] mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={user.subject}
            onChange={data}

            autoComplete="off"
            className="md:w-[600px] w-full bg-transparent pl-2 fon py-3 text-white rounded  border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4 focus:placeholder:opacity-0 "
            placeholder="Email subject"
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="" className="font-mono text-[20px] mb-1">
            Content
          </label>

          <textarea
            rows={5}
            name="content"
            value={user.content}
            onChange={data}
            autoComplete="off"
            placeholder="Email content"
            className="md:w-[600px] w-full bg-transparent pl-2 fon py-3 text-white rounded  border-white/20 border-2 font-mono focus:outline-none focus:border-white/40 transition-all focus:pl-4 focus:placeholder:opacity-0 "
          />
        </div>
        <div className="flex space-x-4 mt-4">
        <button
          name="ResetBtn"
          onClick={getdata}
          className="text-neutral-200 bg-gray-500 active:scale-100 transition-all bg-gradient-to-tr from-gray-600 to-gray-700 py-2 text-[16px] px-10 font-sans font-semibold rounded-md hover:from-neutral-300 hover:to-neutral-400 hover:text-black shadow-[0px_0px_20px_#6b728088]">
          submit
        </button>
        </div>
      </form>
    </>
  );
}
