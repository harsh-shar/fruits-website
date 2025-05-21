import React from 'react'
import ProfileCard from "../components/profileCard";

const Students = () => {
    const profileData = [
        { name: "Harsh Sharma", profession: "Software Engineer", city: "Africa" },
        { name: "Anjali Mehta", profession: "UI/UX Designer", city: "Mumbai" },
        { name: "Ravi Kumar", profession: "Backend Developer", city: "Delhi" },
        { name: "Sneha Rathi", profession: "Product Manager", city: "Bangalore" },
        { name: "Amit Desai", profession: "Data Scientist", city: "New York" },
        { name: "Priya Singh", profession: "Content Writer", city: "Pune" },
        { name: "Rohit Verma", profession: "Frontend Developer", city: "Noida" },
        { name: "Isha Kapoor", profession: "QA Engineer", city: "Chennai" },
        { name: "Nikhil Sharma", profession: "DevOps Engineer", city: "Hyderabad" },
        { name: "Meena Joshi", profession: "Marketing Manager", city: "Kolkata" },
        { name: "Vivek Anand", profession: "Cloud Architect", city: "London" },
        { name: "Riya Gupta", profession: "Graphic Designer", city: "Indore" },
        { name: "Saurabh Mishra", profession: "AI Engineer", city: "Bhopal" },
        { name: "Neha Chauhan", profession: "Mobile Developer", city: "Ahmedabad" },
        { name: "Arjun Rao", profession: "Full Stack Developer", city: "Berlin" },
        { name: "Kajal Yadav", profession: "Business Analyst", city: "Dubai" },
        {
          name: "Manish Tiwari",
          profession: "Cybersecurity Analyst",
          city: "Sydney",
        },
        { name: "Divya Dey", profession: "HR Executive", city: "Singapore" },
        { name: "Lakshya Jain", profession: "SEO Specialist", city: "Goa" },
        { name: "Tanvi Patel", profession: "Game Developer", city: "Tokyo" },
        { name: "Nitin Rawat", profession: "Project Manager", city: "Jaipur" },
        { name: "Swati Sinha", profession: "Web Designer", city: "Varanasi" },
        { name: "Aditya Roy", profession: "Financial Analyst", city: "Paris" },
        { name: "Kritika Das", profession: "Research Scientist", city: "Toronto" },
        { name: "Om Prakash", profession: "Database Admin", city: "Lucknow" },
        { name: "Ankita Paul", profession: "Digital Marketer", city: "Nagpur" },
        { name: "Deepak Jain", profession: "Software Tester", city: "Patna" },
        { name: "Shreya Ghosh", profession: "Copywriter", city: "Surat" },
        {
          name: "Aarav Malik",
          profession: "Blockchain Developer",
          city: "San Francisco",
        },
        { name: "Pooja Sharma", profession: "AI Researcher", city: "Seattle" },
      ];
  return (
    <div className="container mt-4">
         <div className="row">
        {profileData.map((profile, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProfileCard
              name={profile.name}
              profession={profile.profession}
              city={profile.city}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students;