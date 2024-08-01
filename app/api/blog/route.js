import { connectDB } from "@/lib/config/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/blogModel";

// Connect to the database
const HitDb = async () => {
  await connectDB();
};
HitDb();

export async function GET(request) {
  return NextResponse.json({ message: "API Working" });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timeStemp = Date.now();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const imagePath = `./public/${timeStemp}_${image.name}`;
    
    // Write the image file to the public directory
    await writeFile(imagePath, buffer);
    const imgUrl = `/${timeStemp}_${image.name}`;
    
    // Prepare the blog data
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,  // Use the correct image URL
      authorImg: formData.get("authorImg"),
    };

    // Save the blog data to the database
    await blogModel.create(blogData);
    console.log("Blog saved");

    return NextResponse.json({ success: true, msg: "Blog added" });
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json({ success: false, msg: "Error adding blog", error: error.message });
  }
}
