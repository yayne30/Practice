import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import './contactform.css'


function ContactForm() {
  type contact = {
    name: string;
    email: string;
    message: string;
  };
  const form = useForm<contact>();
  const { register, handleSubmit, formState ,getValues,reset  } = form;
  const { errors  , isSubmitSuccessful} = formState;
 
  const onSubmit = (data: contact) => {
    console.log("getvalues" , getValues().name)
    console.log(data);
  };
  useEffect(() =>{
    if (isSubmitSuccessful){
      reset()
    }
  })
  return (

    <div className="form_container">
      <h1> Contact Form </h1>
      <form onSubmit={handleSubmit(onSubmit) } className="form_wrapper" noValidate>
        <label htmlFor="name" > Name </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name cannot be Blank" })}
        />
        <p className="error"> {errors.name?.message}
        </p>
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "You should enter an Email",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email Format",
            },
          
          })}
        />
       

        <p className="error"> {errors.email?.message}</p>
        <label htmlFor="message"> Message </label>
        <input
          type="text"
          id="message"
          {...register("message", { required: "Message cannot be Blank" })}
        />
        <p className="error"> {errors.message?.message}</p>
        <button type="submit" className="submit_btn"> Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
