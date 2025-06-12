import React from "react";
import handcuffs from "../assets/images/handcuffs.png";

const Home = () => {
  return (
    <>
      <div className="h-auto">
        {/* <img src={handcuffs} className="h-96 pt-15 mt-25 ml-30  opacity-25 " /> */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className="mt-30 pt-20 ml-45 opacity-50"
            height={300}
          >
            <path d="M240 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 80c17.7 0 32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.8 39.7-122.4 96.5-146.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32zm0 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm192-96c0-25.9-5.1-50.5-14.4-73.1c16.9-32.9 44.8-59.1 78.9-73.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32s32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 14.4-47.2 14.4-73.1zm224 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM368 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          

        <div className="grid grid-cols-3 mt-20 pt-20 absolute top-10 z-10 text-center text-5xl text-orange-500">
          {/* //section 1 */}
          <div className="text-blue-700">
            " Rock bottom, became the solid foundation on which I rebuilt my
            life "
            <br /> ~R.L.Rowling
          </div>
          {/* //section 2 */}
          <div className="text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className=" ml-60 mb-10 opacity-50"
            height={220}
          >
            <path d="M96 32C96 14.3 81.7 0 64 0S32 14.3 32 32l0 64 0 59.1 0 .7L32 192l0 21.9c0 14.2 5.1 27.9 14.3 38.7L131.6 352l-3.6 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 128 0 64 0 128 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-3.6 0 85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7l0-21.9 0-36.2 0-.7L608 96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 0 48.8-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8c-9.7-5.7-12.1-18.7-5.1-27.5L473 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C361 209.7 352 233.4 352 258.1l0 61.9 0 32-64 0 0-32 0-61.9c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2s-15.2 30.9-4.4 44.5l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5c-8.1 4.8-18.6 2.7-24.2-4.8L96 144.8 96 96l0-64zm64 448l0 32 128 0 0-32 64 0 0 32 128 0 0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0-128 0-64 0-128 0-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0z" />
          </svg>
          <span className="text-4xl pt-20 ml-15 me-40 pl-90 pe-96 absolute top-0 left-50 z-10 text-blue-700">
            " Prison saved my life. Not because I was in danger from other inmates or guards, but because it forced me to face myself and my demons, to learn the hard truth that only pain and suffering can teach."
            <br />
            ~Nicholas Kristof</span>
          </div>
          {/* //section 3 */}
          <div >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className=" ml-70 opacity-50"
            height={220}
          >
            <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
          </svg>
          <span className="text-4xl pt-23 ml-96 me-5 pl-96 absolute top-0 left-50 z-10 text-blue-700" style={{marginLeft: "800px"}}>
          " You can't resolve other peoples issues, but you can sit with them an share the burden of the pain, thereby lightening it. "
            <br />
            ~Yehuda Berg</span>
          </div>
        </div>
      </div>
      <p className="relative mt-10 z-10 p-8 text-center text-2xl text-orange-500">
        <span className="text-blue-700 text-3xl">For Orange. By Orange.</span> is
        an online platform designed to support justice-impacted individuals
        during their transition back into society. Our primary goal is to equip
        these individuals with the necessary resources, tools, and knowledge
        required for successful reintegration, reducing recidivism rates, and
        promoting a more inclusive and just community. <br /> <br />
        Features of{" "}
        <span className="text-blue-700 pt-10 text-3xl">
          For Orange. By Orange.
        </span>
        <br />
        <span className="text-blue-700 text-3xl">~ A Resource Library ~ </span>
        Our resource library houses a wealth of information, articles, guides,
        and videos on topics such as employment, housing, education, financial
        management, mental health, and legal rights. This comprehensive
        collection is regularly updated to ensure the information remains
        relevant and useful for our users.
        <br />
        <span className="text-blue-700 text-3xl">
          ~ A Support Network ~
        </span>{" "}
        Our platform connects justice-impacted individuals with mentors, peer
        support groups, and service providers in their local communities. This
        support network allows them to share experiences, ask questions, and
        gain insights into navigating challenges during their reintegration
        process. <br />
        <span className="text-blue-700 text-3xl">
          ~ Skills Development Workshops ~{" "}
        </span>
        We offer a variety of online workshops designed to help justice-impacted
        individuals develop the skills needed for employment success, such as
        resume writing, interview techniques, and professional development.
        These workshops are accessible to users at their own pace, allowing them
        to learn at a time that suits their schedules. <br />
        <span className="text-blue-700 text-3xl">~ Job Board ~ </span> Our job
        board lists available employment opportunities across various
        industries, with a focus on positions that may be more accessible for
        justice-impacted individuals. Employers who prioritize hiring
        ex-offenders are encouraged to list their job openings on our platform.{" "}
        <br />
        <span className="text-blue-700 text-3xl">~ Community Events ~ </span>
        We maintain an up-to-date list of community events relevant to
        justice-impacted individuals, such as job fairs, workshops, networking
        opportunities, and volunteer events. <br />
        <span className="text-blue-700 text-3xl">~ Housing Assistance ~</span>
        In partnership with local housing providers, we offer resources and
        assistance for finding stable, safe, and affordable housing during the
        reintegration process. This includes information on available subsidies,
        supportive housing programs, and landlord guidelines for renting to
        justice-impacted individuals. <br />
        <span className="text-blue-700 text-3xl">
          ~ Legal Services Directory ~{" "}
        </span>
        Our legal services directory provides users with a list of pro bono
        legal service providers, resources for understanding their legal rights,
        and guidance on navigating the court system during reintegration. <br />{" "}
        <br />
        <span className="text-blue-700 text-3xl">
          {" "}
          For Orange. By Orange.{" "}
        </span>{" "}
        strives to create a more compassionate, equitable, and just society by
        supporting justice-impacted individuals during their reintegration
        journey. Through our comprehensive suite of resources, personalized
        support networks, and skills development opportunities, we aim to
        empower these individuals as they rebuild their lives and contribute
        positively to their communities.
      </p>
      <div className="grid grid-cols-3">
        {/* //section 1 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className="mt-18 ml-10 mb-10 opacity-50"
            height={250}
          >
            <path d="M96 32C96 14.3 81.7 0 64 0S32 14.3 32 32l0 64 0 59.1 0 .7L32 192l0 21.9c0 14.2 5.1 27.9 14.3 38.7L131.6 352l-3.6 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 128 0 64 0 128 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-3.6 0 85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7l0-21.9 0-36.2 0-.7L608 96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 0 48.8-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8c-9.7-5.7-12.1-18.7-5.1-27.5L473 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C361 209.7 352 233.4 352 258.1l0 61.9 0 32-64 0 0-32 0-61.9c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2s-15.2 30.9-4.4 44.5l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5c-8.1 4.8-18.6 2.7-24.2-4.8L96 144.8 96 96l0-64zm64 448l0 32 128 0 0-32 64 0 0 32 128 0 0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0-128 0-64 0-128 0-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0z" />
          </svg>
        </div>
        {/* //section 2 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className="mt-18 ml-50 opacity-50"
            height={250}
          >
            <path d="M240 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 80c17.7 0 32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.8 39.7-122.4 96.5-146.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32zm0 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm192-96c0-25.9-5.1-50.5-14.4-73.1c16.9-32.9 44.8-59.1 78.9-73.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32s32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 14.4-47.2 14.4-73.1zm224 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM368 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </div>
        {/* //section 3 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="orange"
            strokeWidth="1.5"
            stroke="orange"
            className="mt-18 ml-80 opacity-50"
            height={250}
          >
            <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;


//  " You can't resolve other peoples issues, but you can sit with them an share the burden of the pain, thereby lightening it. "