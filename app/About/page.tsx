import Header from "@/components/header/header"

export default function About(){
    return(<div className="bg-gray-900 text-white md:p-4"><Header/>
    <div className=" max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 md:p-16">

<div>
<h2 className="text-teal-400 text-2xl font-semibold">About me:</h2>
<p className="mt-2 text-sm leading-relaxed text-justify">
I completed my bachelor's in Electronics Engineering in 2007 and earned my master's degree in 2017 with a strong academic record (CGPA 3.57). My engineering background has equipped me with a deep understanding of electronic systems, circuit design, and complex problem-solving.

</p>
</div>


<div className="mb-8 p-2">
<h2 className="text-teal-400 text-2xl font-semibold">Education:</h2>
<div className="mt-4 space-y-4">
  <div>
    <h3 className="font-semibold">MEHRAN UET, JAMSHORO</h3>
    <p className="text-sm">Master Degree Graduate (2017)</p>
    <p className="text-xs">
      Masters in Electronics System Engineering with CGPA:3.57 
    </p>
  </div>
  <div>
    <h3 className="font-semibold">MEHRAN UET, JAMSHORO</h3>
    <p className="text-sm">Bachelor Degree Graduate (2007)</p>
    <p className="text-xs">
      B.E, Electronics Engineering with 1st Div 
    </p>
  </div>
  <div>
    <h3 className="font-semibold">GIAIC</h3>
    <p className="text-sm">GIAIC  (2023)</p>
    <p className="text-xs">
     Currently studying in Governor Sindh Initiative for IT  
    </p>
  </div>
  <div>
    <h3 className=" text-teal-400 text-2xl font-semibold mt-4 p-2">Other Certifications:</h3>
    <li> Wireless Local Loop</li>
    <li> Auto CAD</li>
    <li> Primavera Project Planner</li>
     </div>
</div>
</div>

{/* Languages and Hobbies */}
<div className="grid grid-cols-2 gap-4 mb-8 p-2">
<div>
  <h2 className="text-teal-400 text-2xl font-semibold ">Languages:</h2>
  <ul className="mt-2 space-y-1 text-sm">
    <li>English</li>
    <li>Urdu</li>
    <li>Sindhi</li>
  </ul>
</div>
<div>
  <h2 className="text-teal-400 text-2xl font-semibold">Hobbies:</h2>
  <ul className="mt-2 space-y-1 text-sm">
    <li>Travel</li>
    <li>Gaming</li>
    <li>Gyming</li>
    <li>Music</li>
  </ul>
</div>
</div>
</div>
</div>
    )
}