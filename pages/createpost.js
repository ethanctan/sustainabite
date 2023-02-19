import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { useRef, useState, useEffect } from "react";
import { user } from "./login";
import { useForm } from 'react-hook-form';


export default function CreatePost() {

    // Post logic

    const imageInput = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [postName, setPostName] = useState("");
    const [postDesc, setPostDesc] = useState("");
    const generateUploadUrl = useMutation("submitPost:generateUploadUrl");
    const postPost = useMutation("submitPost:postPost");
    const currentuser = user

    async function handlePost(event) {

        event.preventDefault();
        setSelectedImage(null);
        imageInput.current.value = "";
      
        // Text
        setPostName("");
        setPostDesc("");
      
        // Images
      
        // Step 1: Get a short-lived upload URL
        const postUrl = await generateUploadUrl();
      
        // Step 2: POST the file to the URL
        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": selectedImage.type },
          body: selectedImage,
        });
        const { storageId } = await result.json();
      
        // Step 3: Submit post
        console.log( storageId, postName, postDesc, "10", currentuser );
        await postPost( storageId, postName, postDesc, "10", currentuser ) // change this later
      }


    // Form logic

    const [meatChecked, setMeatChecked] = useState(false);

    const handleMeatCheckboxChange = (e) => {
        setMeatChecked(e.target.checked);
    };

    const [porkChecked, setPorkChecked] = useState(false);

    const handlePorkCheckboxChange = (e) => {
        setPorkChecked(e.target.checked);
    };

    const [chickenChecked, setChickenChecked] = useState(false);

    const handleChickenCheckboxChange = (e) => {
        setChickenChecked(e.target.checked);
    };

    const [fishChecked, setFishChecked] = useState(false);

    const handleFishCheckboxChange = (e) => {
        setFishChecked(e.target.checked);
    };

    const [otherChecked, setOtherChecked] = useState(false);

    const handleOtherCheckboxChange = (e) => {
        setOtherChecked(e.target.checked);
    };

    const [cheeseChecked, setCheeseChecked] = useState(false);

    const handleCheeseCheckboxChange = (e) => {
        setCheeseChecked(e.target.checked);
    };

    const [eggChecked, setEggChecked] = useState(false);

    const handleEggCheckboxChange = (e) => {
        setEggChecked(e.target.checked);
    };

    const [milkChecked, setMilkChecked] = useState(false);
    
    const handleMilkCheckboxChange = (e) => {
        setMilkChecked(e.target.checked);
    };

    const [dairyChecked, setDairyChecked] = useState(false);
    
    const handleDairyCheckboxChange = (e) => {
        setDairyChecked(e.target.checked);
    };

    const [starchChecked, setStarchChecked] = useState(false);

    const handleStarchCheckboxChange = (e) => {
        setStarchChecked(e.target.checked);
    };

    const [fruitChecked, setFruitChecked] = useState(false);
    
    const handleFruitCheckboxChange = (e) => {
        setFruitChecked(e.target.checked);
    };
   
    // Form submission


    const handleSubmit1 = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        data = event.target.meatBeefLamb.value;
        // var object = {};
        // data.forEach((value, key) => object[key] = value);
        var JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = '/api/form';
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        alert(`data: ${JSONdata}`);

        

    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
            <>
                        <h1>Add a Meal</h1>


                        <form onSubmit={handlePost}>

                        <input
                        type="text"
                        value={postName}
                        onChange={event => setPostName(event.target.value)}
                        placeholder="Post Title:"
                        />

                        <input
                        type="text"
                        value={postDesc}
                        onChange={event => setPostDesc(event.target.value)}
                        placeholder="Write a Description!"
                        />

                        <input
                        type="file"
                        accept="image/*"
                        ref={imageInput}
                        onChange={event => setSelectedImage(event.target.files[0])}
                        className="ms-2 btn btn-primary"
                        />

                        <input type="submit" value="Send"/>

                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("Username", {})} />
      <input type="text" placeholder="Food Name" {...register("Food Name", {})} />
      <input type="checkbox" placeholder="Meat (beef & lamb)" {...register("Meat (beef & lamb)", {})} />
      <input type="checkbox" placeholder="Meat (pork)" {...register("Meat (pork)", {})} />

      <input type="submit" />
    </form>



        </>
    )
}