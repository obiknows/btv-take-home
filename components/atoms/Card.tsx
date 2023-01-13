const Card = ({ img }) => {
  return (
    <div className="flex flex-col h-full p-2">
      <img
        className=" object-cover  bg-left h-40 "
        src={
          img
            ? img
            : "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2FrJTIwdHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        }
        alt="Image Description"
      />
      <div className="flex flex-col w-full flex-1 pt-2">
        <h3 className="text-xs mb-2">
          Unlock Your 3rd Eye , Chakras, & Crystal Consciousness with Blue Pill
          & 19 Keys
        </h3>
        <div className="flex flex-row items-center space-x-2 mb-2">
          <span className="rounded-full h-6 w-6 bg-orange-400"></span>
          <h6 className="text-xs">@user</h6>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <p className="text-xs">Uploaded 3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
