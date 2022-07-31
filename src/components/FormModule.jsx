import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { BsBookmarkCheckFill, BsFillBookmarkXFill } from "react-icons/bs";
export default function FormModule() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState("");
  const [message, setMessage] = useState("Thanks for contacting me :)");
  function handelchange(e) {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  }
  function handelsubmit(e) {
    const validate = /\b[a-zA-Z]+@\w+.\w/gi;
    e.preventDefault();
    if ((formData.name === "") | (formData.email === "")) {
      window.alert("please fill your info ");
    } else if (formData.email.match(validate)) {
      emailjs
        .send(
          "service_r2lm3zi",
          "template_hlrw9d9",
          formData,
          "wKYFBtQHVDYnaiJtj"
        )
        .then((res) => {
          if (res.status === 200) {
            setFormState("pass");
          } else {
            setFormState();
            setMessage("somthing went wrong");
          }
        });
    } else {
      setFormState("error");
      setMessage("please write a valid email");
    }
    // setFormData({
    //   email: "",
    //   textarea: "",
    // });
  }

  return (
    <Module>
      <Message>
        {formState === "pass" ? (
          <p className="passMsg">
            <BsBookmarkCheckFill /> <span>{message}</span>{" "}
          </p>
        ) : formState === "error" ? (
          <p className="errorMsg">
            <BsFillBookmarkXFill /> <span>{message}</span>
          </p>
        ) : (
          ""
        )}
      </Message>
      <form>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="Email"
          placeholder="email@exmple.com"
          onChange={handelchange}
          required
          value={formData.email}
        />
        <label htmlFor="message">Send me a Message</label>
        <textarea
          name="message"
          id="Message"
          rows="10"
          placeholder="Send me a message :)"
          onChange={handelchange}
          required
          value={formData.textarea}
        ></textarea>
        <button onClick={handelsubmit}>send</button>
      </form>
    </Module>
  );
}
const Module = styled.div`
  width: 100%;
  input {
    display: block;
    margin-bottom: 5px;
    padding: 10px;
    width: 100%;
    max-width: 450px;
    border-radius: 10px;
    color: black;
    box-shadow: 0px 0px 10px 0px #000000bd;
  }
  textarea {
    padding: 10px;
    color: black;
    border-radius: 5px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 10px 0px #000000bd;
    max-width: 450px;
    min-width: 300px;
  }
  label {
    margin-bottom: 5px;
    display: block;
  }
  button {
    display: block;
    margin: auto;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    background-color: black;
    color: #800080;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #000000bd;
    :hover {
      color: #986a57;
      background-color: #14131394;
    }
  }
`;
const Message = styled.div`
  p {
    padding: 20px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    span {
      color: black;
      font-weight: 700;
    }
  }
`;
