/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import SubsTableItem from "../_components/SubsTableItem";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmails = async (mongoId) => {
    try {
      // Sending DELETE request to your API with the email's MongoDB ID as a parameter
      const response = await axios.delete("/api/email", {
        params: { id: mongoId },
      });
  
      // If the response indicates success, show a success message
      if (response.data.success) {
        toast.success(response.data.msg);
        // Optionally, refresh the list of emails after deletion
        fetchEmails();
      } else {
        toast.error(response.data.msg || "Error deleting the email");
      }
    } catch (error) {
      // If there's an error with the request, show an error toast
      toast.error(error.response?.data?.msg || "Failed to delete the email");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-semibold mb-4">All Subscribers</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-y-auto mt-4 border border-gray-400 rounded-md shadow-sm scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-300">
            <tr>
              <th className="px-6 py-3" scope="col">
                Email Subscription
              </th>
              <th className="hidden sm:table-cell px-6 py-3" scope="col">
                Date
              </th>
              <th className="px-6 py-3" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item) => {
              return (
                <SubsTableItem
                  key={item}
                  mongoId={item._id}
                  email={item.email}
                  deleteEmails={deleteEmails}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
