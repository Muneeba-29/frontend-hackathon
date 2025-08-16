import React from "react";

function About() {
    return (
       <div className="min-h-screen w-full flex items-center justify-center bg-pink-200">
            <div className=" w-[90%] md:w-[80%] border border-purple-300 shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full h-auto">
                    <img src="https://img.freepik.com/free-photo/side-view-woman-wearing-pink-hijab_23-2149642261.jpg?semt=ais_hybrid&w=740" alt="Focused business woman" className="w-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 w-full my-auto text-center">
                    <h2 className="text-6xl font-bold text-pink-600 mb-6">About Us</h2>
                    <p className="mb-6 px-2 md:px-4 text-gray-800">At MODEST BEAUTY, we believe modesty is a form of elegance. Our mission is to empower women through thoughtfully designed hijabs that combine comfort, quality, and timeless style.

Every piece we create is a reflection of grace, identity, and strength — tailored for the modern woman who values both fashion and faith.

From everyday essentials to statement styles, we are committed to offering beautifully crafted hijabs that celebrate modesty without compromising on beauty.</p>
                    <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-400 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Learn more</button>
                </div>
            </div>
        </div>
    )
}
export default About