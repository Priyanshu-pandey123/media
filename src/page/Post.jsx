import React, { useState } from "react";
import ImageUpload from "../component/ImageUpload";
import EditorToolbar from "../component/EditorToolBar";
import FormInput from "../component/FormInput";
import Head from "../component/Head";
import { db, storage } from "../utils/firebaseApp"; // Assuming you've exported your Firebase instances
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore methods
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const imageUrls = [];

    // Upload the selected images to Firebase Storage
    const storageRef = ref(storage, "images"); // Define a folder for the images in Firebase Storage

    // Loop through selected images and upload them
    for (const file of selectedImages) {
      const imageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(imageRef, file); // Upload the image

      // After the image is uploaded, get the download URL
      const fileUrl = await getDownloadURL(imageRef);
      imageUrls.push(fileUrl); // Store the URL
    }

    // Now, create the post object with all data, including the image URLs
    const post = {
      heading: formData.heading,
      tag: formData.tag,
      category: formData.category,
      videoLink: formData.videoLink,
      content: formData.content,
      images: imageUrls, // Store the image URLs
      createdAt: serverTimestamp(), // Timestamp for when the post was created
    };

    // Add the post to Firestore
    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, post); // Save the post to Firestore

    console.log("Post added to Firestore:", post);

    // Reset form after submission
    setFormData({
      heading: "",
      tag: "",
      category: "",
      videoLink: "",
      content: "",
    });
    setSelectedImages([]);
  } catch (error) {
    console.error("Error adding post to Firestore:", error);
  }
};

const PostForm = () => {
  const [formData, setFormData] = useState({
    heading: "",
    tag: "",
    category: "",
    videoLink: "",
    content: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (files) => {
    setSelectedImages(Array.from(files));
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", {
  //     ...formData,
  //     images: selectedImages,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrls = [];

      // Upload the selected images to Firebase Storage
      const storageRef = ref(storage, "images"); // Define a folder for the images in Firebase Storage

      // Loop through selected images and upload them
      for (const file of selectedImages) {
        const imageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file); // Upload the image

        // After the image is uploaded, get the download URL
        const fileUrl = await getDownloadURL(imageRef);
        imageUrls.push(fileUrl); // Store the URL
      }

      // Now, create the post object with all data, including the image URLs
      const post = {
        heading: formData.heading,
        tag: formData.tag,
        category: formData.category,
        videoLink: formData.videoLink,
        content: formData.content,
        images: imageUrls, // Store the image URLs
        createdAt: serverTimestamp(), // Timestamp for when the post was created
      };

      // Add the post to Firestore
      const postsCollection = collection(db, "posts");
      await addDoc(postsCollection, post); // Save the post to Firestore

      console.log("Post added to Firestore:", post);

      // Reset form after submission
      setFormData({
        heading: "",
        tag: "",
        category: "",
        videoLink: "",
        content: "",
      });
      setSelectedImages([]);
    } catch (error) {
      console.error("Error adding post to Firestore:", error);
    }
  };

  return (
    <div>
      <Head />
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <ImageUpload onImageSelect={handleImageSelect} />

          {selectedImages.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {selectedImages.map((file, index) => (
                <div key={index} className="text-sm text-gray-600">
                  {file.name}
                </div>
              ))}
            </div>
          )}

          <FormInput
            placeholder="Add Heading"
            value={formData.heading}
            onChange={handleInputChange("heading")}
          />

          <FormInput
            placeholder="Add Tag"
            value={formData.tag}
            onChange={handleInputChange("tag")}
          />

          <FormInput
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange("category")}
          />

          <div className="relative">
            <FormInput
              placeholder="Add Video Link"
              value={formData.videoLink}
              onChange={handleInputChange("videoLink")}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg">
            <EditorToolbar />
            <textarea
              placeholder="Write Articles"
              className="w-full p-4 min-h-[100px] focus:outline-none resize-none"
              value={formData.content}
              onChange={handleInputChange("content")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#33CCFF] text-white py-3 rounded-lg hover:bg-[#2BB6E5] transition-colors"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
