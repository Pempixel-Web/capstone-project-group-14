import { useState } from "react"; 
import "./Contactform.css";


export default function ContactForm() {
const [formData, setFormData] = useState({
fullName: "",
email: "",
phone: "",
city: "",
address: "",
message: "",
});

const [success, setSuccess] = useState(false);
const [errors, setErrors] = useState({});

const handleChange = (e) => {
const { name, value } = e.target;

// Phone: allow numbers only
if (name === "phone") {
const numbersOnly = value.replace(/\D/g, "");

setFormData((prev) => ({
...prev,
[name]: numbersOnly,
}));

return;
}

setFormData((prev) => ({
...prev,
[name]: value,
}));
};

const validate = () => {
let newErrors = {};

if (
!formData.fullName ||
formData.fullName.length < 10 ||
formData.fullName.length > 20
) {
newErrors.fullName = "Name must be 10–20 characters";
}

if (!formData.email) {
newErrors.email = "Email is required";
}

// Phone validation: exactly 11 digits
if (!/^\d{11}$/.test(formData.phone)) {
newErrors.phone = "Phone must contain exactly 11 digits";
}

if (!formData.city) {
newErrors.city = "City is required";
}

if (!formData.address) {
newErrors.address = "Address is required";
}

if (!formData.message || formData.message.length > 100) {
newErrors.message = "Message must be max 100 characters";
}

return newErrors;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validate();
  setErrors(formErrors);

  if (Object.keys(formErrors).length === 0) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSuccess(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      message: "",
    });
    setTimeout(() => setSuccess(false), 3000);
  }
};

return (
<>
{success && (
<div
style={{
color: "green",
fontWeight: "bold",
marginBottom: "10px",
}}
>
Form submitted successfully!
</div>
)}

{/* Contact Form Header */}

  <div className="contact-header" id="contact-header">
    <h2>Have Questions About Planetary Science?</h2>
    <p>
      Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? <br /> Reach out and we'll get back to you. <br />
    </p>
  </div>

<form
id="ContactForm"
onSubmit={handleSubmit}
className="form-grid"
>
{/* Full Name */}
<div>
<label>
Full Name <span style={{ color: "red" }}>*</span>
</label>

<input
name="fullName"
placeholder="e.g. John Doe"
value={formData.fullName}
onChange={handleChange}
/>

{errors.fullName && (
<small style={{ color: "red" }}>
{errors.fullName}
</small>
)}
</div>

{/* Email */}
<div>
<label>
Email <span style={{ color: "red" }}>*</span>
</label>

<input
name="email"
type="email"
placeholder="e.g. johndoe@gmail.com"
value={formData.email}
onChange={handleChange}
/>

{errors.email && (
<small style={{ color: "red" }}>
{errors.email}
</small>
)}
</div>

{/* Phone */}
<div>
<label>
Phone <span style={{ color: "red" }}>*</span>
</label>

<input
name="phone"
placeholder="e.g. 08012345678"
maxLength={11}
value={formData.phone}
onChange={handleChange}
/>

{errors.phone && (
<small style={{ color: "red" }}>
{errors.phone}
</small>
)}
</div>

{/* City */}
<div>
<label>
City <span style={{ color: "red" }}>*</span>
</label>

<select
name="city"
value={formData.city}
onChange={handleChange}
>
<option value="">Select your city</option>
<option value="ikeja">Ikeja</option>
<option value="lekki">Lekki</option>
<option value="yaba">Yaba</option>
<option value="surulere">Surulere</option>
<option value="ajah">Ajah</option>
<option value="epe">Epe</option>
<option value="ikorodu">Ikorodu</option>
<option value="maryland">Maryland</option>
<option value="festac">Festac</option>
</select>

{errors.city && (
<small style={{ color: "red" }}>
{errors.city}
</small>
)}
</div>

{/* Address */}
<div className="half-width">
<label>
Address <span style={{ color: "red" }}>*</span>
</label>

<input
name="address"
placeholder="e.g. 12 Allen Avenue, Ikeja"
value={formData.address}
onChange={handleChange}
/>

{errors.address && (
<small style={{ color: "red" }}>
{errors.address}
</small>
)}
</div>

{/* Message */}
<div className="half-width">
<label>
Message <span style={{ color: "red" }}>*</span>
</label>

<textarea
name="message"
placeholder="Type your message here..."
maxLength={100}
value={formData.message}
onChange={handleChange}
/>

{errors.message && (
<small style={{ color: "red" }}>
{errors.message}
</small>
)}
</div>

{/* Button */}
<div className="button-wrapper">
<button type="submit">
Submit
</button>
</div>
</form>
</>
);
}
