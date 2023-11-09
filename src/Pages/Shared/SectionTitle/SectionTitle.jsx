import PropTypes from "prop-types";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-14 px-2">
      <h4 className="text-3xl lg:text-4xl xl:text-5xl dark:text-white">
        {title}
      </h4>
      <div className="h-[2px] my-6 w-1/4 bg-theme-golden mx-auto">
        <span className="w-[10px] h-[10px] bg-theme-golden inline-block rotate-45 relative -top-[11px]"></span>
      </div>
      <p className="text-xl dark:text-white max-w-lg mx-auto">{subTitle}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default SectionTitle;
