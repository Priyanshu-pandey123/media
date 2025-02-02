import React, { useState, useRef } from "react";
import { db, storage } from "../utils/firebaseApp";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ImageUpload from "../component/ImageUpload";
import FormInput from "../component/FormInput";
import EditorToolbar from "../component/EditorToolBar";
import Head from "../component/Head";

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
    setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedImages.length === 0) {
        alert("Please select at least one image.");
        return;
      }

      const imageUrls = [];

      // Upload images to Firebase Storage
      for (const file of selectedImages) {
        const imageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file); // Upload the file

        // ✅ Correct way to get the download URL
        const fileUrl = await getDownloadURL(imageRef);
        console.log("Uploaded file URL:", fileUrl); // Debugging
        imageUrls.push(fileUrl);
      }

      // Save data to Firestore
      const post = {
        heading: formData.heading,
        tag: formData.tag,
        category: formData.category,
        videoLink: formData.videoLink,
        content: formData.content,
        images: imageUrls,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "posts"), post);
      console.log("Post added:", post);

      // Reset form
      setFormData({
        heading: "",
        tag: "",
        category: "",
        videoLink: "",
        content: "",
      });
      setSelectedImages([]);
    } catch (error) {
      console.error("Error uploading post:", error);
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
          <FormInput
            placeholder="Add Video Link"
            value={formData.videoLink}
            onChange={handleInputChange("videoLink")}
          />

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
