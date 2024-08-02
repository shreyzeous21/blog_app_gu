import { connectDB } from "@/lib/config/database";
import EmailModel from "@/lib/models/emailModel";
import { NextResponse } from "next/server";

// Connect to the database
const LoadDB = async () => {
  await connectDB();
};
LoadDB();

// Handle POST request to subscribe an email
export async function POST(request) {
  try {
    const formData = await request.formData();
    const emailData = {
      email: formData.get("email"),
    };

    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
  } catch (error) {
    return NextResponse.json({
      success: false,
      msg: "Subscription failed",
      error: error.message,
    });
  }
}

// Handle GET request to fetch all subscribed emails
export async function GET(request) {
  try {
    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, emails });
  } catch (error) {
    return NextResponse.json({
      success: false,
      msg: "Failed to fetch emails",
      error: error.message,
    });
  }
}

// Handle DELETE request to remove a subscribed email
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted" });
}
