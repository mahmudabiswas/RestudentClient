import React from "react";
import CountUp from "react-countup";
const BlogCount = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4  justify-around text-center items-center">
        <div>
          <CountUp delay={2} start={0} end={25} className="text-8xl" />

          <span className="ml-4">Years Of Experience </span>
        </div>
        <div>
          <CountUp delay={2} start={300} end={500} className="text-8xl" />

          <span className="ml-4">Experienced Worker</span>
        </div>
        <div>
          <CountUp delay={2} start={0} end={5} className="text-8xl" />

          <span className="ml-4">Happy Customers</span>
        </div>
        <div>
          <CountUp delay={2} start={0} end={99} className="text-8xl" />

          <span className="ml-4">Cup of Coffee & Tea</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCount;
