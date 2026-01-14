const RewardProgressBar = ({
  totalPoints = 1000,
  remainingPoints = 254,
}) => {
  const progress =
    ((totalPoints - remainingPoints) / totalPoints) * 100;

  return (
    <div className="!px-9 !py-6 rounded-3xl shadow-md w-[95%] bg-white border border-silver">
    
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden !mb-4">
        <div
          className="h-full bg-lime-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="font-medium text-sm text-secondary">
        {remainingPoints}{" "}
        <span className="font-normal text-text-forgot-pass">
          Points are left to be sold in order to qualify for this reward.
        </span>
      </h3>
    </div>
  );
};

export default RewardProgressBar;
