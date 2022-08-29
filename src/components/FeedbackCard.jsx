import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-2xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-11 h-7" />
    <p className="text-lg text-white my-10">
      {content}
    </p>

    <div className="flex">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-semibold text-xl text-white">
          {name}
        </h4>
        <p className="text-base text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
