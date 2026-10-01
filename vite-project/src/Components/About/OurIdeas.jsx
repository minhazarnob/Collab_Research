import React from 'react';

const OurIdeas = () => {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Idea</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Born at Pabna University of Science and Technology, CollabResearch started as a student project to connect researchers across departments. We recognized that groundbreaking discoveries happen at the intersection of disciplines.
              </p>
              <p className="text-gray-600 text-lg">
                Our platform breaks down academic silos by creating a digital space where computer scientists can find biologists, where physicists can collaborate with sociologists, and where innovative ideas can flourish.
              </p>
            </div>

            <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">2019</h3>
                  <p>Concept Development</p>
                </div>

                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">2020</h3>
                  <p>First Prototype</p>
                </div>

                <div className="bg-purple-100 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">2021</h3>
                  <p>University Adoption</p>
                </div>

                <div className="bg-yellow-100 p-6 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">2022</h3>
                  <p>National Expansion</p>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    );
};

export default OurIdeas;