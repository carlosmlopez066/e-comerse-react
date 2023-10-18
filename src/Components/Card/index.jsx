const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
        <img className="w-full h-full object-cover rounded-lg " src="https://cdn.vox-cdn.com/thumbor/Z8CCJM0UUjUBDYfuzykCKNg7QIY=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23454340/DSCF7916.jpg" alt="headphones" />
        <div className="absolute top-0 right-0 flex row-auto justify-center items-center  bg-white w-6 h-6 rounded-full m-2 p1"
        >🛒</div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphone</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  )
}
export default Card