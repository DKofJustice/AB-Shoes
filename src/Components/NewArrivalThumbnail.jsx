import PropTypes from 'prop-types';

export default function NewArrivalThumbnail({ thumbnail, title }) {
    return (
      <div className="group shadow-xl w-[10rem] md:w-full md:min-w-[16rem] max-w-[20rem] cursor-pointer">
        <div className="w-full h-[13rem] md:h-[22vw] overflow-hidden flex flex-row justify-center items-center">
          <img src={thumbnail} alt="" className="w-full h-full object-cover scale-[1] group-hover:scale-[1.1]
          transition-all duration-200" />
        </div>
  
        <div className="px-[2rem] py-[1.5rem]">
          <p className="text-[0.8rem] md:text-[1.2rem] font-semibold">{title}</p>
        </div>
      </div>
    )
  }

  NewArrivalThumbnail.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };