import React from 'react'
import Card from './components/Card'
import { Routes, Route } from "react-router-dom";
import HiringForm from "./Components/HiringForm";
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "1 week ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    datePosted: "2 weeks ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1947.jpg?width=1008&height=681&name=ibm-logo-1947.jpg",
    company: "IBM",
    datePosted: "4 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "1 month ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$108/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "5 days ago",
    post: "Frontend React Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/snap.com",
    company: "Snap Inc.",
    datePosted: "2 weeks ago",
    post: "UI Motion Designer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$118/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "9 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe",
    datePosted: "3 weeks ago",
    post: "Payment Integration Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://logo.clearbit.com/shopify.com",
    company: "Shopify",
    datePosted: "7 days ago",
    post: "React Frontend Developer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    company: "LinkedIn",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/twitter.com",
    company: "Twitter (X)",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$100/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/paypal.com",
    company: "PayPal",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "1 week ago",
    post: "CRM Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/slack.com",
    company: "Slack",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/reddit.com",
    company: "Reddit",
    datePosted: "2 weeks ago",
    post: "Software Engineer II",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "5 days ago",
    post: "Mobile Developer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/doordash.com",
    company: "DoorDash",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoom.us",
    company: "Zoom",
    datePosted: "10 days ago",
    post: "React JS Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/asana.com",
    company: "Asana",
    datePosted: "2 weeks ago",
    post: "Software Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    company: "Figma",
    datePosted: "4 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "8 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/atlassian.com",
    company: "Atlassian",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoom.com",
    company: "Zoom",
    datePosted: "3 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$100/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "7 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Berlin, Germany"
  },
    {
    brandLogo: "https://logo.clearbit.com/pinterest.com",
    company: "Pinterest",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$118/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/dropbox.com",
    company: "Dropbox",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/discord.com",
    company: "Discord",
    datePosted: "5 days ago",
    post: "React Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/notion.so",
    company: "Notion",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/databricks.com",
    company: "Databricks",
    datePosted: "3 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/sap.com",
    company: "SAP",
    datePosted: "10 days ago",
    post: "Software Consultant",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoom.com",
    company: "Zoom",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    company: "Figma",
    datePosted: "6 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$155/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe",
    datePosted: "2 weeks ago",
    post: "API Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$135/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    datePosted: "8 days ago",
    post: "Prompt Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$180/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/github.com",
    company: "GitHub",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoom.com",
    company: "Zoom",
    datePosted: "5 days ago",
    post: "Full Stack Intern",
    tag1: "Internship",
    tag2: "Junior level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/hp.com",
    company: "HP",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/dell.com",
    company: "Dell",
    datePosted: "3 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/cisco.com",
    company: "Cisco",
    datePosted: "2 weeks ago",
    post: "Network Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    company: "Zoho",
    datePosted: "9 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/byjus.com",
    company: "Byju's",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoominfotech.com",
    company: "Zoom Info",
    datePosted: "3 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/coinbase.com",
    company: "Coinbase",
    datePosted: "4 days ago",
    post: "Blockchain Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$170/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/bitbucket.org",
    company: "Bitbucket",
    datePosted: "2 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://logo.clearbit.com/whatsapp.com",
    company: "WhatsApp",
    datePosted: "5 days ago",
    post: "Android Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/samsung.com",
    company: "Samsung",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Seoul, South Korea"
  },
  {
    brandLogo: "https://logo.clearbit.com/huawei.com",
    company: "Huawei",
    datePosted: "3 days ago",
    post: "Network Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Shenzhen, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/tencent.com",
    company: "Tencent",
    datePosted: "2 weeks ago",
    post: "Game Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Beijing, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/sony.com",
    company: "Sony",
    datePosted: "1 week ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Tokyo, Japan"
  },
  {
    brandLogo: "https://logo.clearbit.com/lenovo.com",
    company: "Lenovo",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Beijing, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    company: "Accenture",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tcs.com",
    company: "TCS",
    datePosted: "5 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/infosys.com",
    company: "Infosys",
    datePosted: "9 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/wipro.com",
    company: "Wipro",
    datePosted: "3 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/hcltech.com",
    company: "HCLTech",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/cognizant.com",
    company: "Cognizant",
    datePosted: "1 week ago",
    post: "Software Tester",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$75/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    company: "Zoho",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$90/hr",
    location: "Madurai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    company: "Accenture",
    datePosted: "3 days ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/capgemini.com",
    company: "Capgemini",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/epam.com",
    company: "EPAM Systems",
    datePosted: "1 week ago",
    post: "ReactJS Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Warsaw, Poland"
  },
  {
    brandLogo: "https://logo.clearbit.com/deloitte.com",
    company: "Deloitte",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/pwc.com",
    company: "PwC",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/kpmg.com",
    company: "KPMG",
    datePosted: "7 days ago",
    post: "Cyber Security Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/ey.com",
    company: "EY",
    datePosted: "4 days ago",
    post: "IT Consultant",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Paris, France"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/squarespace.com",
    company: "Squarespace",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/vercel.com",
    company: "Vercel",
    datePosted: "5 days ago",
    post: "Next.js Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/netlify.com",
    company: "Netlify",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$100/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/bitwarden.com",
    company: "Bitwarden",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    company: "Figma",
    datePosted: "1 week ago",
    post: "Design System Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$155/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "8 days ago",
    post: "Embedded Software Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/spaceX.com",
    company: "SpaceX",
    datePosted: "3 days ago",
    post: "Aerospace Software Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nokia.com",
    company: "Nokia",
    datePosted: "1 week ago",
    post: "Telecom Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Helsinki, Finland"
  },
  {
    brandLogo: "https://logo.clearbit.com/siemens.com",
    company: "Siemens",
    datePosted: "2 weeks ago",
    post: "IoT Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Munich, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/qualcomm.com",
    company: "Qualcomm",
    datePosted: "6 days ago",
    post: "Chip Design Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "San Diego, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amd.com",
    company: "AMD",
    datePosted: "5 days ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/samsung.com",
    company: "Samsung",
    datePosted: "2 weeks ago",
    post: "Embedded Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Seoul, South Korea"
  },
  {
    brandLogo: "https://logo.clearbit.com/intuit.com",
    company: "Intuit",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/paloaltonetworks.com",
    company: "Palo Alto Networks",
    datePosted: "9 days ago",
    post: "Cyber Security Analyst",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    company: "Zoho",
    datePosted: "8 days ago",
    post: "Web Designer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    company: "Flipkart",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/swiggy.com",
    company: "Swiggy",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zomato.com",
    company: "Zomato",
    datePosted: "7 days ago",
    post: "Full Stack Engineer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$90/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/olaelectric.com",
    company: "Ola Electric",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/phonepe.com",
    company: "PhonePe",
    datePosted: "1 week ago",
    post: "Android Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/paytm.com",
    company: "Paytm",
    datePosted: "2 weeks ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$90/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/myntra.com",
    company: "Myntra",
    datePosted: "1 week ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nykaa.com",
    company: "Nykaa",
    datePosted: "5 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/cred.club",
    company: "CRED",
    datePosted: "3 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zerodha.com",
    company: "Zerodha",
    datePosted: "7 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/groww.in",
    company: "Groww",
    datePosted: "9 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/dream11.com",
    company: "Dream11",
    datePosted: "8 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/academy.com",
    company: "Academy Sports",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    company: "Adobe",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "California, USA"
  },
    {
    brandLogo: "https://logo.clearbit.com/bitly.com",
    company: "Bitly",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/buffer.com",
    company: "Buffer",
    datePosted: "6 days ago",
    post: "Social Media Engineer",
    tag1: "Remote",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/duckduckgo.com",
    company: "DuckDuckGo",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/revolut.com",
    company: "Revolut",
    datePosted: "8 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/monzo.com",
    company: "Monzo Bank",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/starlink.com",
    company: "Starlink",
    datePosted: "4 days ago",
    post: "Satellite Network Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nike.com",
    company: "Nike",
    datePosted: "5 days ago",
    post: "E-commerce Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Oregon, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adidas.com",
    company: "Adidas",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/northropgrumman.com",
    company: "Northrop Grumman",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Virginia, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/boeing.com",
    company: "Boeing",
    datePosted: "9 days ago",
    post: "Aviation Software Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/lockheedmartin.com",
    company: "Lockheed Martin",
    datePosted: "8 days ago",
    post: "Defense Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/northvolt.com",
    company: "Northvolt",
    datePosted: "5 days ago",
    post: "Embedded Software Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/pinterest.co.uk",
    company: "Pinterest UK",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/redditinc.com",
    company: "Reddit Inc.",
    datePosted: "3 days ago",
    post: "Community Platform Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/coursera.org",
    company: "Coursera",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/udemy.com",
    company: "Udemy",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/edx.org",
    company: "edX",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Boston, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/khanacademy.org",
    company: "Khan Academy",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/quizlet.com",
    company: "Quizlet",
    datePosted: "2 weeks ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/pluralsight.com",
    company: "Pluralsight",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Utah, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/codecademy.com",
    company: "Codecademy",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/duolingo.com",
    company: "Duolingo",
    datePosted: "3 days ago",
    post: "Game Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Pittsburgh, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/roblox.com",
    company: "Roblox",
    datePosted: "4 days ago",
    post: "Game Engine Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/epicgames.com",
    company: "Epic Games",
    datePosted: "1 week ago",
    post: "Unreal Engine Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$155/hr",
    location: "Raleigh, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/unity.com",
    company: "Unity Technologies",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Copenhagen, Denmark"
  },
  {
    brandLogo: "https://logo.clearbit.com/electronicarts.com",
    company: "EA Games",
    datePosted: "10 days ago",
    post: "Gameplay Programmer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/ubisoft.com",
    company: "Ubisoft",
    datePosted: "5 days ago",
    post: "Graphics Programmer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Montreal, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/activision.com",
    company: "Activision",
    datePosted: "9 days ago",
    post: "Game Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/riotgames.com",
    company: "Riot Games",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/valvesoftware.com",
    company: "Valve",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Washington, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/twitch.tv",
    company: "Twitch",
    datePosted: "5 days ago",
    post: "Streaming Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/discord.com",
    company: "Discord",
    datePosted: "3 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/slack.com",
    company: "Slack",
    datePosted: "2 weeks ago",
    post: "Integration Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    company: "Figma",
    datePosted: "3 days ago",
    post: "Design System Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/midjourney.com",
    company: "Midjourney",
    datePosted: "4 days ago",
    post: "AI Image Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/runwayml.com",
    company: "Runway ML",
    datePosted: "5 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$170/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/anthropic.com",
    company: "Anthropic",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$185/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/perplexity.ai",
    company: "Perplexity AI",
    datePosted: "7 days ago",
    post: "LLM Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$180/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/deepmind.com",
    company: "DeepMind",
    datePosted: "8 days ago",
    post: "Research Scientist",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$190/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI Labs",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$175/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/huggingface.co",
    company: "Hugging Face",
    datePosted: "2 weeks ago",
    post: "NLP Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$165/hr",
    location: "Paris, France"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/51/1/stability-ai-logo-png_seeklogo-515005.png",
    company: "Stability AI",
    datePosted: "4 days ago",
    post: "AI Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$175/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/pytorch.org",
    company: "PyTorch Foundation",
    datePosted: "9 days ago",
    post: "ML Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$155/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/61/2/langchain-icon-logo-png_seeklogo-611655.png",
    company: "LangChain",
    datePosted: "7 days ago",
    post: "AI SDK Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$145/hr",
    location: "Remote"
  },
    {
    brandLogo: "https://i.redd.it/v25csc8k7lie1.png",
    company: "Mistral AI",
    datePosted: "3 days ago",
    post: "Research Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$185/hr",
    location: "Paris, France"
  },
  {
    brandLogo: "https://logo.clearbit.com/nuro.ai",
    company: "Nuro",
    datePosted: "4 days ago",
    post: "Autonomous Vehicle Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$170/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/cruise.com",
    company: "Cruise",
    datePosted: "7 days ago",
    post: "AI Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$160/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/waymo.com",
    company: "Waymo",
    datePosted: "6 days ago",
    post: "Machine Learning Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$175/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/instacart.com",
    company: "Instacart",
    datePosted: "5 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/shopify.com",
    company: "Shopify Plus",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Ottawa, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/squarespace.com",
    company: "Squarespace Inc.",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/vimeo.com",
    company: "Vimeo",
    datePosted: "4 days ago",
    post: "Video Platform Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/dribbble.com",
    company: "Dribbble",
    datePosted: "6 days ago",
    post: "Frontend Designer",
    tag1: "Part Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/behance.net",
    company: "Behance",
    datePosted: "5 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://onnivation.in/wp-content/uploads/2021/12/Drata_Logo.jpg",
    company: "Drata",
    datePosted: "2 weeks ago",
    post: "Security Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "San Diego, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/datadog.com",
    company: "Datadog",
    datePosted: "1 week ago",
    post: "Cloud Monitoring Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/snowflake.com",
    company: "Snowflake",
    datePosted: "8 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/palantir.com",
    company: "Palantir Technologies",
    datePosted: "6 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$155/hr",
    location: "Denver, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/hashicorp.com",
    company: "HashiCorp",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$135/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/digitalocean.com",
    company: "DigitalOcean",
    datePosted: "7 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/vultr.com",
    company: "Vultr",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Florida, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/linode.com",
    company: "Linode",
    datePosted: "1 week ago",
    post: "Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Philadelphia, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/vercel.com",
    company: "Vercel Labs",
    datePosted: "3 days ago",
    post: "Next.js Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/netlify.com",
    company: "Netlify Cloud",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/sentry.io",
    company: "Sentry",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/mongodb.com",
    company: "MongoDB",
    datePosted: "6 days ago",
    post: "Database Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/elastic.co",
    company: "Elastic",
    datePosted: "8 days ago",
    post: "Search Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    brandLogo: "https://logo.clearbit.com/atlassian.com",
    company: "Atlassian Corp",
    datePosted: "4 days ago",
    post: "Jira Plugin Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://about.gitlab.com/images/press/gitlab-logo-100-rgb.png",
    company: "GitLab",
    datePosted: "5 days ago",
    post: "DevOps Engineer",
    tag1: "Remote",
    tag2: "Mid level",
    pay: "$135/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/bitbucket.org",
    company: "Bitbucket Labs",
    datePosted: "3 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    company: "Figma Studio",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/miro.com",
    company: "Miro",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    brandLogo: "https://logo.clearbit.com/asana.com",
    company: "Asana Ltd",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/trello.com",
    company: "Trello",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/loom.com",
    company: "Loom",
    datePosted: "9 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/calendly.com",
    company: "Calendly",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Atlanta, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/typeform.com",
    company: "Typeform",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Barcelona, Spain"
  },
  {
    brandLogo: "https://logo.clearbit.com/intercom.com",
    company: "Intercom",
    datePosted: "5 days ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://logo.clearbit.com/wise.com",
    company: "Wise",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/revolut.com",
    company: "Revolut Bank",
    datePosted: "4 days ago",
    post: "Android Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/n26.com",
    company: "N26",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/transferwise.com",
    company: "TransferWise",
    datePosted: "7 days ago",
    post: "Payment System Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe Financial",
    datePosted: "9 days ago",
    post: "API Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/sofi.com",
    company: "SoFi",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/robinhood.com",
    company: "Robinhood",
    datePosted: "5 days ago",
    post: "Trading Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/fidelity.com",
    company: "Fidelity Investments",
    datePosted: "2 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Boston, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/mastercard.com",
    company: "Mastercard",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/visa.com",
    company: "Visa",
    datePosted: "9 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "San Francisco, USA"
  },
    {
    brandLogo: "https://logo.clearbit.com/jpmorganchase.com",
    company: "JPMorgan Chase",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/goldmansachs.com",
    company: "Goldman Sachs",
    datePosted: "5 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/morganstanley.com",
    company: "Morgan Stanley",
    datePosted: "3 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/citigroup.com",
    company: "Citi Bank",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Singapore"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/09/Color-Deutsche-Bank-Logo.jpg",
    company: "Deutsche Bank",
    datePosted: "5 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Frankfurt, Germany"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/1/1/bank-of-america-logo-png_seeklogo-16306.png",
    company: "Bank of America",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/barclays.com",
    company: "Barclays",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/ubs.com",
    company: "UBS",
    datePosted: "9 days ago",
    post: "Java Backend Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Zurich, Switzerland"
  },
  {
    brandLogo: "https://logo.clearbit.com/hsbc.com",
    company: "HSBC",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Hong Kong"
  },
  {
    brandLogo: "https://logo.clearbit.com/santander.com",
    company: "Santander",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Madrid, Spain"
  },
  {
    brandLogo: "https://logo.clearbit.com/natwest.com",
    company: "NatWest Group",
    datePosted: "5 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/americanexpress.com",
    company: "American Express",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Arizona, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/blackrock.com",
    company: "BlackRock",
    datePosted: "6 days ago",
    post: "Python Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/capitalone.com",
    company: "Capital One",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Virginia, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/chubb.com",
    company: "Chubb Insurance",
    datePosted: "7 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "New Jersey, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/intuit.com",
    company: "Intuit Inc",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/sap.com",
    company: "SAP Labs",
    datePosted: "4 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/siemens.com",
    company: "Siemens Digital",
    datePosted: "9 days ago",
    post: "IoT Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Munich, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/philips.com",
    company: "Philips",
    datePosted: "5 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    brandLogo: "https://logo.clearbit.com/abb.com",
    company: "ABB",
    datePosted: "6 days ago",
    post: "Embedded Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$125/hr",
    location: "Zurich, Switzerland"
  },
  {
    brandLogo: "https://logo.clearbit.com/hitachi.com",
    company: "Hitachi Energy",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Tokyo, Japan"
  },
  {
    brandLogo: "https://logo.clearbit.com/panasonic.com",
    company: "Panasonic",
    datePosted: "5 days ago",
    post: "Firmware Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$135/hr",
    location: "Osaka, Japan"
  },
  {
    brandLogo: "https://logo.clearbit.com/lg.com",
    company: "LG Electronics",
    datePosted: "7 days ago",
    post: "Android Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Seoul, South Korea"
  },
  {
    brandLogo: "https://logo.clearbit.com/nec.com",
    company: "NEC Corporation",
    datePosted: "8 days ago",
    post: "Network Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Tokyo, Japan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGjqHyoPElrGaGab1i4RkryBMJ52HVH0B3Q&s",
    company: "Fujitsu",
    datePosted: "6 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Tokyo, Japan"
  },
  {
    brandLogo: "https://logo.clearbit.com/alibaba.com",
    company: "Alibaba Group",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$120/hr",
    location: "Hangzhou, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/baidu.com",
    company: "Baidu",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Beijing, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/bytedance.com",
    company: "ByteDance",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$130/hr",
    location: "Beijing, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/tencent.com",
    company: "Tencent Cloud",
    datePosted: "7 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$145/hr",
    location: "Shenzhen, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/xiaomi.com",
    company: "Xiaomi",
    datePosted: "8 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$115/hr",
    location: "Beijing, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/lenovo.com",
    company: "Lenovo Global",
    datePosted: "9 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Hong Kong"
  },
  {
    brandLogo: "https://logo.clearbit.com/oppo.com",
    company: "OPPO",
    datePosted: "10 days ago",
    post: "Software Tester",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Shenzhen, China"
  },
  {
    brandLogo: "https://logo.clearbit.com/vivo.com",
    company: "Vivo India",
    datePosted: "6 days ago",
    post: "Android Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/realme.com",
    company: "Realme",
    datePosted: "5 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oneplus.com",
    company: "OnePlus",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/mi.com",
    company: "MI India",
    datePosted: "7 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/swiggy.com",
    company: "Swiggy Labs",
    datePosted: "8 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zomato.com",
    company: "Zomato Tech",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/olaelectric.com",
    company: "Ola Electric Labs",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/phonepe.com",
    company: "PhonePe Tech",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/paytm.com",
    company: "Paytm Labs",
    datePosted: "7 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/myntra.com",
    company: "Myntra Tech",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nykaa.com",
    company: "Nykaa Digital",
    datePosted: "6 days ago",
    post: "Web Designer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    company: "Flipkart Plus",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/groww.in",
    company: "Groww Finance",
    datePosted: "5 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/cred.club",
    company: "CRED Tech",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zerodha.com",
    company: "Zerodha Labs",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/dream11.com",
    company: "Dream11 Tech",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "Mumbai, India"
  },
  { brandLogo: "https://logo.clearbit.com/10xgenomics.com", company: "10x Genomics", datePosted: "3 days ago", post: "Full Stack Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$130/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/23andme.com", company: "23andMe", datePosted: "5 days ago", post: "Data Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "California, USA" },
  { brandLogo: "https://logo.clearbit.com/2u.com", company: "2U", datePosted: "6 days ago", post: "Backend Developer", tag1: "Full Time", tag2: "Mid level", pay: "$105/hr", location: "Boston, USA" },
  { brandLogo: "https://logo.clearbit.com/3m.com", company: "3M", datePosted: "1 week ago", post: "Embedded Software Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$140/hr", location: "Minnesota, USA" },
  { brandLogo: "https://logo.clearbit.com/8x8.com", company: "8x8", datePosted: "4 days ago", post: "VoIP Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "San Jose, USA" },
  { brandLogo: "https://www.snainfo.com/img/s815_01.jpg", company: "AbleStack", datePosted: "2 weeks ago", post: "Frontend Developer", tag1: "Remote", tag2: "Junior level", pay: "$85/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/acceleronpharma.com", company: "Acceleron Pharma", datePosted: "6 days ago", post: "Bioinformatics Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Cambridge, USA" },
  { brandLogo: "https://logo.clearbit.com/acorns.com", company: "Acorns", datePosted: "3 days ago", post: "iOS Developer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "California, USA" },
  { brandLogo: "https://logo.clearbit.com/adverity.com", company: "Adverity", datePosted: "5 days ago", post: "Data Integration Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "Vienna, Austria" },
  { brandLogo: "https://logo.clearbit.com/afiniti.com", company: "Afiniti", datePosted: "7 days ago", post: "AI Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$160/hr", location: "Washington, USA" },
  { brandLogo: "https://media.licdn.com/dms/image/v2/C4D16AQHmYrjUxdDAog/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1656753897534?e=2147483647&v=beta&t=4u1-iqCkCPsM6U_XTKVs95I891lsFBkMkesCMiSiiQ4", company: "Agashe Labs", datePosted: "2 days ago", post: "Frontend Developer", tag1: "Part Time", tag2: "Junior level", pay: "$60/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/akamai.com", company: "Akamai", datePosted: "4 days ago", post: "Edge Systems Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$135/hr", location: "Boston, USA" },
  { brandLogo: "https://logo.clearbit.com/alation.com", company: "Alation", datePosted: "6 days ago", post: "Data Catalog Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "Redwood City, USA" },
  { brandLogo: "https://logo.clearbit.com/allegro.pl", company: "Allegro", datePosted: "1 week ago", post: "Backend Developer", tag1: "Full Time", tag2: "Mid level", pay: "$105/hr", location: "Poznan, Poland" },
  { brandLogo: "https://logo.clearbit.com/alteryx.com", company: "Alteryx", datePosted: "3 days ago", post: "Data Scientist", tag1: "Full Time", tag2: "Senior level", pay: "$145/hr", location: "Irvine, USA" },
  { brandLogo: "https://logo.clearbit.com/amplitude.com", company: "Amplitude", datePosted: "5 days ago", post: "Product Analytics Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/ana.io", company: "ANA Research", datePosted: "2 weeks ago", post: "NLP Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$140/hr", location: "Berlin, Germany" },
  { brandLogo: "https://logo.clearbit.com/angel.co", company: "AngelList", datePosted: "4 days ago", post: "Full Stack Developer", tag1: "Remote", tag2: "Mid level", pay: "$115/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/ansys.com", company: "ANSYS", datePosted: "6 days ago", post: "Simulation Software Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Canonsburg, USA" },
  { brandLogo: "https://logo.clearbit.com/antmicro.com", company: "Antmicro", datePosted: "3 days ago", post: "Firmware Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Poznan, Poland" },
  { brandLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQHt4isDyzifxQ/company-logo_200_200/company-logo_200_200/0/1630575752285?e=2147483647&v=beta&t=DrYOudlE1HtOYSqulTUUGWVteR1qjVJaPvpv0bgF31E", company: "Antlia", datePosted: "5 days ago", post: "DevOps Engineer", tag1: "Full Time", tag2: "Junior level", pay: "$90/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/apexclearing.com", company: "Apex Clearing", datePosted: "1 week ago", post: "Site Reliability Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$130/hr", location: "Dallas, USA" },
  { brandLogo: "https://logo.clearbit.com/appian.com", company: "Appian", datePosted: "2 days ago", post: "Low-Code Developer", tag1: "Full Time", tag2: "Mid level", pay: "$110/hr", location: "Reston, USA" },
  { brandLogo: "https://logo.clearbit.com/appera.com", company: "Appera", datePosted: "4 days ago", post: "Mobile Developer", tag1: "Full Time", tag2: "Junior level", pay: "$85/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/aptiv.com", company: "Aptiv", datePosted: "3 days ago", post: "Automotive Software Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$140/hr", location: "Dublin, Ireland" },
  { brandLogo: "https://logo.clearbit.com/arbetsformedlingen.se", company: "Arbetsförmedlingen", datePosted: "6 days ago", post: "Web Developer", tag1: "Full Time", tag2: "Mid level", pay: "$95/hr", location: "Stockholm, Sweden" },
  { brandLogo: "https://logo.clearbit.com/archer.com", company: "Archer Aviation", datePosted: "1 week ago", post: "Flight Software Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$160/hr", location: "Palo Alto, USA" },
  { brandLogo: "https://logo.clearbit.com/arista.com", company: "Arista Networks", datePosted: "4 days ago", post: "Network Software Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$135/hr", location: "Santa Clara, USA" },
  { brandLogo: "https://logo.clearbit.com/asurion.com", company: "Asurion", datePosted: "2 days ago", post: "Mobile QA Engineer", tag1: "Full Time", tag2: "Junior level", pay: "$95/hr", location: "Nashville, USA" },
  { brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiwJYHca79ZgWtKSvy4iDnQ7aqOkEqdqlQ&s", company: "Atta Labs", datePosted: "5 days ago", post: "AI Research Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$170/hr", location: "Toronto, Canada" },
  { brandLogo: "https://logo.clearbit.com/auvik.com", company: "Auvik Networks", datePosted: "7 days ago", post: "Cloud Network Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "Waterloo, Canada" },
  { brandLogo: "https://logo.clearbit.com/avast.com", company: "Avast", datePosted: "3 days ago", post: "Security Researcher", tag1: "Full Time", tag2: "Senior level", pay: "$140/hr", location: "Prague, Czechia" },
  { brandLogo: "https://logo.clearbit.com/avalara.com", company: "Avalara", datePosted: "4 days ago", post: "Tax Software Developer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Seattle, USA" },
  { brandLogo: "https://logo.clearbit.com/aviva.com", company: "Aviva", datePosted: "6 days ago", post: "Insurtech Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$110/hr", location: "London, UK" },
  { brandLogo: "https://logo.clearbit.com/babylonhealth.com", company: "Babylon Health", datePosted: "2 days ago", post: "Healthcare Data Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$130/hr", location: "London, UK" },
  { brandLogo: "https://logo.clearbit.com/backblaze.com", company: "Backblaze", datePosted: "5 days ago", post: "Storage Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "Sacramento, USA" },
  { brandLogo: "https://logo.clearbit.com/bandlab.com", company: "BandLab", datePosted: "1 week ago", post: "Audio Software Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Melbourne, Australia" },
  { brandLogo: "https://logo.clearbit.com/baremetrics.com", company: "Baremetrics", datePosted: "6 days ago", post: "SaaS Engineer", tag1: "Remote", tag2: "Mid level", pay: "$110/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/bazaarvoice.com", company: "Bazaarvoice", datePosted: "4 days ago", post: "Backend Developer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Austin, USA" },
  { brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6piOpuZP3kqDKiLICF-XEG4frzO3arIe_qQ&s", company: "Beekeeper", datePosted: "3 days ago", post: "Mobile Developer", tag1: "Full Time", tag2: "Junior level", pay: "$90/hr", location: "Zurich, Switzerland" },
  { brandLogo: "https://logo.clearbit.com/bento.io", company: "Bento", datePosted: "5 days ago", post: "Platform Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "Paris, France" },
  { brandLogo: "https://logo.clearbit.com/bigpanda.io", company: "BigPanda", datePosted: "2 days ago", post: "SRE", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Boston, USA" },
  { brandLogo: "https://logo.clearbit.com/bitrise.io", company: "Bitrise", datePosted: "1 week ago", post: "CI/CD Engineer", tag1: "Remote", tag2: "Mid level", pay: "$120/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/blackbaud.com", company: "Blackbaud", datePosted: "6 days ago", post: "Full Stack Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$110/hr", location: "Charleston, USA" },
  { brandLogo: "https://logo.clearbit.com/blueskyweb.org", company: "Bluesky", datePosted: "4 days ago", post: "Protocol Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/bombora.com", company: "Bombora", datePosted: "5 days ago", post: "Data Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "New York, USA" },
  { brandLogo: "https://logo.clearbit.com/branch.io", company: "Branch", datePosted: "3 days ago", post: "Mobile SDK Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/braze.com", company: "Braze", datePosted: "2 days ago", post: "Lifecycle Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "New York, USA" },
  { brandLogo: "https://logo.clearbit.com/breezy.hr", company: "Breezy HR", datePosted: "6 days ago", post: "Product Engineer", tag1: "Remote", tag2: "Junior level", pay: "$85/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/broadcom.com", company: "Broadcom", datePosted: "1 week ago", post: "Hardware Verification Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$155/hr", location: "San Jose, USA" },
  { brandLogo: "https://logo.clearbit.com/bumble.com", company: "Bumble", datePosted: "4 days ago", post: "Android Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "Austin, USA" },
  { brandLogo: "https://logo.clearbit.com/buzzfeed.com", company: "BuzzFeed", datePosted: "5 days ago", post: "News Platform Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$100/hr", location: "New York, USA" },
  { brandLogo: "https://logo.clearbit.com/cadence.com", company: "Cadence Design", datePosted: "3 days ago", post: "EDA Software Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "San Jose, USA" },
  { brandLogo: "https://logo.clearbit.com/campaignmonitor.com", company: "Campaign Monitor", datePosted: "2 days ago", post: "Email Platform Engineer", tag1: "Remote", tag2: "Mid level", pay: "$110/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/canvas.com", company: "Canvas", datePosted: "6 days ago", post: "UI Engineer", tag1: "Full Time", tag2: "Junior level", pay: "$90/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/carvana.com", company: "Carvana", datePosted: "1 week ago", post: "Data Platform Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "Tempe, USA" },
  { brandLogo: "https://logo.clearbit.com/cell.com", company: "Cellular AI", datePosted: "4 days ago", post: "Telecom Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Seoul, South Korea" },
  { brandLogo: "https://logo.clearbit.com/cerebras.net", company: "Cerebras Systems", datePosted: "5 days ago", post: "AI Hardware Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$170/hr", location: "Los Altos, USA" },
  { brandLogo: "https://logo.clearbit.com/chime.com", company: "Chime", datePosted: "3 days ago", post: "Backend Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/chromium.org", company: "Chromium Project", datePosted: "2 days ago", post: "Browser Engineer", tag1: "Remote", tag2: "Senior level", pay: "$150/hr", location: "Remote" },
  { brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNT8c83EKRP6M4_F3TcfZxWxkJDVha2arag&s", company: "Chronicle Security", datePosted: "6 days ago", post: "Threat Researcher", tag1: "Full Time", tag2: "Senior level", pay: "$155/hr", location: "Mountain View, USA" },
  { brandLogo: "https://logo.clearbit.com/cint.com", company: "Cint", datePosted: "4 days ago", post: "API Developer", tag1: "Full Time", tag2: "Mid level", pay: "$110/hr", location: "Stockholm, Sweden" },
  { brandLogo: "https://logo.clearbit.com/cloudera.com", company: "Cloudera", datePosted: "1 week ago", post: "Data Platform Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Santa Clara, USA" },
  { brandLogo: "https://logo.clearbit.com/cloudflare.com", company: "Cloudflare Workers", datePosted: "3 days ago", post: "Edge Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$135/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/codacy.com", company: "Codacy", datePosted: "2 days ago", post: "Code Quality Engineer", tag1: "Remote", tag2: "Mid level", pay: "$110/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/codility.com", company: "Codility", datePosted: "5 days ago", post: "Assessment Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$105/hr", location: "Warsaw, Poland" },
  { brandLogo: "https://logo.clearbit.com/codethink.co.uk", company: "CodeThink", datePosted: "6 days ago", post: "Embedded C Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$140/hr", location: "Glasgow, UK" },
  { brandLogo: "https://logo.clearbit.com/coinfirm.com", company: "Coinfirm", datePosted: "1 week ago", post: "Blockchain Analyst", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "London, UK" },
  { brandLogo: "https://logo.clearbit.com/colaberry.com", company: "Colaberry", datePosted: "3 days ago", post: "ML Ops Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Mumbai, India" },
  { brandLogo: "https://logo.clearbit.com/collectivehealth.com", company: "Collective Health", datePosted: "4 days ago", post: "Data Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$130/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/compass.com", company: "Compass", datePosted: "2 days ago", post: "Real Estate Platform Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$120/hr", location: "New York, USA" },
  { brandLogo: "https://logo.clearbit.com/confluent.io", company: "Confluent", datePosted: "6 days ago", post: "Streaming Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Mountain View, USA" },
  { brandLogo: "https://logo.clearbit.com/consensys.net", company: "ConsenSys", datePosted: "5 days ago", post: "Blockchain Developer", tag1: "Remote", tag2: "Mid level", pay: "$140/hr", location: "Remote" },
  { brandLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQGK9Mo9oJRkfw/company-logo_200_200/company-logo_200_200/0/1700237404848/continualai_logo?e=2147483647&v=beta&t=-WH_Qlo5m3ygm42IbHW4qTiPhibrw2QkvRlme2Nvyc8", company: "Continual", datePosted: "7 days ago", post: "ML Research Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$165/hr", location: "Berlin, Germany" },
  { brandLogo: "https://logo.clearbit.com/coschedule.com", company: "CoSchedule", datePosted: "3 days ago", post: "Frontend Developer", tag1: "Part Time", tag2: "Junior level", pay: "$80/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/coupang.com", company: "Coupang", datePosted: "4 days ago", post: "Backend Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "Seoul, South Korea" },
  { brandLogo: "https://logo.clearbit.com/cranfield.ac.uk", company: "Cranfield Tech", datePosted: "6 days ago", post: "Aerospace Software Developer", tag1: "Full Time", tag2: "Senior level", pay: "$145/hr", location: "Cranfield, UK" },
  { brandLogo: "https://logo.clearbit.com/crowdstrike.com", company: "CrowdStrike", datePosted: "2 days ago", post: "Endpoint Security Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$155/hr", location: "Austin, USA" },
  { brandLogo: "https://logo.clearbit.com/crunchbase.com", company: "Crunchbase", datePosted: "5 days ago", post: "Data Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$115/hr", location: "San Francisco, USA" },
  { brandLogo: "https://logo.clearbit.com/ctsi.com", company: "CTSI Global", datePosted: "1 week ago", post: "Integration Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$100/hr", location: "London, UK" },
  { brandLogo: "https://logo.clearbit.com/cybereason.com", company: "Cybereason", datePosted: "4 days ago", post: "Malware Analyst", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "Boston, USA" },
  { brandLogo: "https://logo.clearbit.com/cypress.io", company: "Cypress", datePosted: "3 days ago", post: "QA Automation Engineer", tag1: "Remote", tag2: "Mid level", pay: "$110/hr", location: "Remote" },
  { brandLogo: "https://logo.clearbit.com/datorama.com", company: "Datorama", datePosted: "6 days ago", post: "BI Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$125/hr", location: "London, UK" },
  { brandLogo: "https://logo.clearbit.com/dataminr.com", company: "Dataminr", datePosted: "5 days ago", post: "Real-time Data Engineer", tag1: "Full Time", tag2: "Senior level", pay: "$150/hr", location: "New York, USA" },
  { brandLogo: "https://logo.clearbit.com/dayforce.com", company: "Dayforce", datePosted: "2 days ago", post: "HR Systems Engineer", tag1: "Full Time", tag2: "Mid level", pay: "$110/hr", location: "Toronto, Canada" }
];

        
  return ( 
    <Routes>
      <Route
        path="/"
        element={
     
      <div className='parent'>
        {jobOpenings.map(function(elem){

          return <Card Company={elem.company} DatePosted={elem.datePosted} Post={elem.post} Tag1={elem.tag1} Tag2={elem.tag2} Pay={elem.pay} Location={elem.location} BrandLogo={elem.brandLogo} />
        })}
    </div>
   }
      />
      <Route path="/apply" element={<HiringForm />} />
    </Routes>
  )
}

export default App
