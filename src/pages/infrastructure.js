import React, { useEffect } from "react";
import InfraTop from "../components/infraTop";
import InfraContent from "../components/infraContent";
import { Helmet } from "react-helmet";

const Infrastructure = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
            <Helmet>
        <title>Explore Micro Quartz Infrastructure: Your Source for Quartz Products </title>
        <meta
          name="description"
          content="Discover the infrastructure page of Micro Quartz website, your one-stop destination for quartz powder, quartz grits, silica powder, quartz countertops, quartz pebbles, and more."
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      <InfraTop></InfraTop>
      <InfraContent></InfraContent>
    </>
  );
};

export default Infrastructure;
