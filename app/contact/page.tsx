"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { theme } from "@/styles/theme";

const countries = [
  "United States", "Canada", "United Kingdom", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function ContactFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmailValue(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using the /ajax/ endpoint prevents FormSubmit from redirecting the browser
      const response = await fetch("https://formsubmit.co/ajax/onewayministriescol@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Contact Form Submission - One Way Ministries",
          _template: "table",
          _captcha: "false"
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch (err) {
        // Ignore JSON parsing errors
      }

      if (response.ok) {
        if (result && result.success === "false") {
          alert(result.message || "Action required. Please check your email to verify the address.");
        } else {
          sessionStorage.setItem("formSubmitted", "true");
          router.push("/thank-you");
        }
      } else {
        alert(result?.message || "Something went wrong. Please ensure the email is verified.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle: React.CSSProperties = { display: "block", textAlign: "left", marginBottom: "8px", fontWeight: 600, color: "#333" };
  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem" };

  return (
    <div style={{ padding: "120px 20px", minHeight: "80vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", color: theme.colors.accent, display: "block", marginBottom: "15px", textTransform: "uppercase" }}>
            Connect and support
          </span>
          <h1 style={{ color: theme.colors.primary, fontSize: "3rem", marginBottom: "15px", fontWeight: 800 }}>
            Be Part Of The Story
          </h1>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Lives are being touched through the love of Christ in Colombia. Stay connected, pray with us, and discover how God may be calling you to be part of this mission.
          </p>
        </div>

        {/* Main Content: Form */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center" 
        }}>
          
          {/* Contact Form */}
          <div style={{ width: "100%", maxWidth: "700px", backgroundColor: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" placeholder="email@example.com" style={inputStyle} value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" style={inputStyle} required />
                </div>

                <div>
                  <label style={labelStyle}>Country</label>
                  <select name="country" defaultValue="" style={{ ...inputStyle, backgroundColor: "#fff", cursor: "pointer" }} required>
                    <option value="" disabled>Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <label style={labelStyle}>How do you want to get involved?</label>
              <select name="interest" defaultValue="" style={{ ...inputStyle, backgroundColor: "#fff", cursor: "pointer" }} required>
                <option value="" disabled>Select an area of interest</option>
                <option value="Youth & Families">Youth & Families</option>
                <option value="People with Disabilities">People with Disabilities</option>
                <option value="Food & Housing">Food & Housing</option>
                <option value="Immigrants & Refugees">Immigrants & Refugees</option>
              </select>

              <label style={labelStyle}>Additional Notes</label>
              <textarea name="message" rows={5} placeholder="Is there anything else you’d like to share with us?" style={{ ...inputStyle, resize: "vertical" }}></textarea>

              <button type="submit" style={{
                backgroundColor: theme.colors.accent,
                color: "#fff",
                padding: "15px 30px",
                border: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "opacity 0.2s",
                opacity: isSubmitting ? 0.7 : 1
              }}
              disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get Involved Now"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: "120px 20px", minHeight: "80vh", backgroundColor: "#f9f9f9", textAlign: "center" }}>Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}